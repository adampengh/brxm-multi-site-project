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

import React from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import GTM from './GTM';
import PreviewMode from './PreviewMode';
import { BrComponent, BrPage, BrPageContext } from '@bloomreach/react-sdk';
import { CommerceConnectorProvider } from '@bloomreach/connector-components-react';
import { RouteComponentProps } from 'react-router-dom';
import { GlobalElementsProvider } from './context/GlobalElementsContext';

import { Drawer } from './uikit';

// Components
import {
    Banner,
    Footer,
    Header,
    Hero,
    Navigation,
    NewsList,
    ProductDetail,
    ProductListingGrid,
} from './components';

const MAPPING = {
    Banner,
    Hero,
    Navigation,
    'News List': NewsList,
    ProductDetail,
    ProductListingGrid,
};

const App = (props: RouteComponentProps) => {
    const connector = process.env.REACT_APP_DEFAULT_CONNECTOR || 'brsm';
    const graphqlServiceUrl = process.env.REACT_APP_DEFAULT_GRAPHQL_SERVICE_URL || 'http://localhost:4000';
    const existingToken = sessionStorage.getItem('token') ?? undefined; // retrieve existing token from session storage

    // To view the site in "Preview" mode, pass the query sting parameter "preview=true"
    const cookies = new Cookies();
    const queryString = require('query-string');
    const previewQueryString = queryString.parse(window?.location.search);
    if (previewQueryString?.preview) {
        cookies.set('previewMode', 'true', { path: '/' });
    }

    // brXM Configuration
    const previewMode = cookies.get('previewMode') || false;
    const configuration = {
        endpoint: previewMode === 'true' ? process.env.REACT_APP_BRXM_ENDPOINT_PREVIEW : process.env.REACT_APP_BRXM_ENDPOINT,
        endpointQueryParameter: 'endpoint',
        httpClient: axios,
        path: `${props.location.pathname}${props.location.search}`,
    };

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
                    <Drawer />
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
        </BrPage>
    );
}

export default App;
