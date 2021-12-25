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
import { Container, Row, Column } from './uikit/Layout';
import { RouteComponentProps } from 'react-router-dom';
import { BrComponent, BrPage, BrPageContext } from '@bloomreach/react-sdk';
import PreviewMode from './PreviewMode';

// Components
import {
    Banner,
    Content,
    Footer,
    Header,
    Hero,
    Navigation,
    NewsList,
} from './components';

const MAPPING = {
    Banner,
    Content,
    Hero,
    Navigation,
    'News List': NewsList,
    'Simple Content': Content
};

export default function App(props: RouteComponentProps) {

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
        endpoint: previewMode === "true" ? process.env.REACT_APP_BRXM_ENDPOINT_PREVIEW : process.env.REACT_APP_BRXM_ENDPOINT,
        endpointQueryParameter: 'endpoint',
        httpClient: axios,
        path: `${props.location.pathname}${props.location.search}`,
    };

    return (
        <BrPage configuration={configuration} mapping={MAPPING}>
            <Header />
            <main>
                <Hero />

                <Container>
                    <h1>Container</h1>
                    <Row>
                        <Column>Column</Column>
                        <Column>Column</Column>
                        <Column>Column</Column>
                    </Row>

                </Container>

                <BrComponent path="main" />
            </main>
            <Footer />

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
