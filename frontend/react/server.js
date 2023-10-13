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
const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware');

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


app.get('/sitemap.xml', createProxyMiddleware({
    logger: console,
    target: process.env.REACT_APP_CMS_BASE_URL, // Only the protocol and domain
    changeOrigin: true,
    pathRewrite: {
        '/sitemap.xml': '/site/sitemap.xml'
    },
    onProxyRes: (proxyResponse, request, response) => {
        const _write = response.write;
        let output;
        let body = "";
        proxyResponse.on('data', (data) => {
            data = data.toString('utf-8');
            body += data;
            // replace localhost with actual domain
            body = body.replace(/http\:\/\/localhost\:8080\/site/g, 'https://www.example.com');
        });
        response.write = () => {
            try {
              eval("output="+body)
              output = mock.mock(output)
              _write.call(res, JSON.stringify(output));
            } catch (err) {}
        }
        proxyResponse.on('end', () => {
            response.send(body)
        })
    },
}));

// Process all other requests
app.get('/*', async (req, res) => {
    await axios({
        method: 'get',
        url: `${process.env.REACT_APP_CMS_BASE_URL}/site/api/documents`,
        timeout: 5000
    })
        .then(async (response) => {
            const redirects = response?.data?._embedded?.documents || [];
            await redirects?.forEach(async(redirect, index) => {
                if (redirect.rulefrom && redirect.ruleto) {
                    // Strip query parameters, but in a more advanced implementation you could use them
                    const path = req.url.replace(/(\?.*)/g, '')
                    if (redirect.rulefrom === path) {
                        let statusCode = 302;
                        if (redirect.ruletype && redirect.ruletype === 'permanent-redirect') {
                            statusCode = 301;
                        }
                        await res.redirect(statusCode, redirect.ruleto);
                    }
                }
            })
            await res.sendFile(path.join(__dirname, 'build', 'index.html'));
        })
        .catch(async (error) => {
            error = error.toJSON();
            console.log(error.name, error.message);
            await res.sendFile(path.join(__dirname, 'build', 'index.html'));
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on Port: ${PORT}`);
});
