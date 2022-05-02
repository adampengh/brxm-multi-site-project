import React from 'react';
import { Helmet } from 'react-helmet';

const PageMetadata = ({ pageMetadata}: any) => {
    const {
        canonicalUrl,
        metaDescription,
        metaKeywords,
        ogDescription,
        // ogImage,
        ogTitle,
        ogType,
        ogUrl,
        pageTitle,
    } = pageMetadata;

    return (
        <Helmet>
            { pageTitle && <title>{pageTitle}</title>}
            { metaKeywords.length && <meta name='keywords' content={metaKeywords.join(',')} /> }
            { metaDescription && <meta name='description' content={metaDescription} /> }
            { canonicalUrl && <link rel='canonical' href={canonicalUrl} /> }

            { ogTitle && <meta property='og:title' content={ogTitle} /> }
            { ogDescription && <meta property='og:description' content={ogDescription} /> }
            { ogUrl && <meta property='og:url' content={ogUrl} /> }
            { ogType && <meta property='og:type' content={ogType} /> }
        </Helmet>
    )
}

export default PageMetadata;
