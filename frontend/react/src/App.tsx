/*
 * Copyright 2019-2020 Hippo B.V. (http://www.onehippo.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useContext } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import GTM from './GTM';
import PreviewMode from './PreviewMode';
import { Configuration } from '@bloomreach/spa-sdk';
import { BrComponent, BrPage, BrPageContext } from '@bloomreach/react-sdk';
import { CommerceConnectorProvider } from '@bloomreach/connector-components-react';
import { useLocation } from 'react-router-dom';
import { GlobalElementsProvider } from './context/GlobalElementsContext';
import { ErrorContext, ErrorCode } from './ErrorContext';
import ErrorPage from './ErrorPage';

// import { Drawer } from './uikit';

// Components
import {
    Banner,
    Breadcrumbs,
    Content,
    Footer,
    Header,
    Hero,
    Navigation,
    NewsList,
    PathwaysRecommendations,
    ProductDetail,
    ProductListingGrid,
} from './components';
import BrPixel from './BrPixel';
import VisitorIdCookie from './utils/VisitorIdCookie';

const MAPPING = {
    Banner,
    'Breadcrumb': Breadcrumbs,
    Content,
    Hero,
    'navigation': Navigation,
    'News List': NewsList,
    PathwaysRecommendations,
    ProductDetail,
    ProductListingGrid,
};

export const ERROR_PAGE_PATH_MAP = {
    [ErrorCode.NOT_FOUND]: '/404',
    [ErrorCode.INTERNAL_SERVER_ERROR]: '/500',
    [ErrorCode.GENERAL_ERROR]: '/_error',
};

const App = () => {
    const cookies = new Cookies();
    const { errorCode, requestURL } = useContext(ErrorContext);
    const location = useLocation();

    if (errorCode && requestURL) {
        const { pathname } = new URL(requestURL);
        if (pathname.endsWith(ERROR_PAGE_PATH_MAP[errorCode])) {
            // To avoid infinite loop
            return <ErrorPage />;
        }
    }

    const visitorId = cookies.get('visitor');
    console.log('visitorId', visitorId);

    const path = errorCode
        ? `${ERROR_PAGE_PATH_MAP[errorCode] ?? ERROR_PAGE_PATH_MAP[ErrorCode.GENERAL_ERROR]}${location.search}`
        : `${location.pathname}${location.search}`;

    const connector = process.env.REACT_APP_DEFAULT_CONNECTOR || 'brsm';
    const graphqlServiceUrl = process.env.REACT_APP_DEFAULT_GRAPHQL_SERVICE_URL || 'http://localhost:4000';
    const existingToken = sessionStorage.getItem('token') ?? undefined; // retrieve existing token from session storage

    // To view the site in "Preview" mode, pass the query sting parameter "preview=true"
    const queryString = require('query-string');
    const previewQueryString = queryString.parse(window?.location.search);
    if (previewQueryString?.preview) {
        cookies.set('previewMode', 'true', { path: '/' });
    }



    // brXM Configuration
    const previewMode = cookies.get('previewMode') || false;
    const configuration: Configuration = {
        endpoint: previewMode === 'true' ? process.env.REACT_APP_BRXM_ENDPOINT_PREVIEW : process.env.REACT_APP_BRXM_ENDPOINT,
        httpClient: axios,
        path,
    };
    if (visitorId) {
        configuration.visitor = {
            id: visitorId,
            header: 'visitor'
        }
    }

    return (
        <BrPage configuration={configuration} mapping={MAPPING}>
            <GlobalElementsProvider>
                <CommerceConnectorProvider
                    connector={connector}
                    graphqlServiceUrl={graphqlServiceUrl}
                    existingToken={existingToken}
                >
                    <Header />
                    <main>
                        <BrComponent path='top' />
                        <BrComponent path='main' />
                        <BrComponent path='bottom' />
                    </main>
                    <Footer />
                    <BrComponent path='drawer'>
                        {/* <Drawer /> */}
                    </BrComponent>
                </CommerceConnectorProvider>
            </GlobalElementsProvider>
            <BrPageContext.Consumer>
                { page => {
                    if (!page?.isPreview() && previewMode) {
                        return <PreviewMode />
                    }
                }}
            </BrPageContext.Consumer>
            <GTM />
            <BrPixel />
            <VisitorIdCookie />
        </BrPage>
    );
}

export default App;
