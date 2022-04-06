/*
 * Copyright 2019 Hippo B.V. (http://www.onehippo.com)
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

const axios = require('axios');
const dotenv = require('dotenv');
const express = require('express');
const fs = require('fs');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dotenvPath = path.resolve(process.cwd(), '.env');
if (fs.existsSync(dotenvPath)) {
    const { error } = dotenv.config({ path: dotenvPath });
    if (error) {
        throw error;
    }
}

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Proxy robots.txt to brXM
app.get('/robots.txt', createProxyMiddleware({
    target: process.env.REACT_APP_CMS_BASE_URL, // Only the protocol and domain
    changeOrigin: true,
    pathRewrite: {
        '/robots.txt': '/site/robots.txt'
    }
}));

// Proxy sitemap.xml to brXM
app.get('/sitemap.xml', createProxyMiddleware({
    target: process.env.REACT_APP_CMS_BASE_URL, // Only the protocol and domain
    changeOrigin: true,
    pathRewrite: {
        '/sitemap.xml': '/site/sitemap.xml'
    }
}));

axios({
    method: 'get',
    url: `${process.env.REACT_APP_CMS_BASE_URL}/site/api/documents`,
    timeout: 5000
})
    .then((response) => {
        // handle success
        const redirects = response.data._embedded.documents;
        redirects.forEach((redirect, index) => {
            if (redirect.rulefrom && redirect.ruleto) {
                app.get(redirect.rulefrom, (req, res) => {
                    let statusCode = 302;
                    if (redirect.ruletype && redirect.ruletype === 'permanent-redirect') {
                        statusCode = 301;
                    }
                    res.redirect(statusCode, redirect.ruleto);
                })
            }
        })

        app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        });

        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    })
    .catch((error) => {
        // handle error
        error = error.toJSON();
        console.log(error.name, error.message);

        app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname, 'build', 'index.html'));
        });

        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    });
