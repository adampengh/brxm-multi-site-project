import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTM = () => {
    useEffect(() => {
        const tagManagerArgs = {
            gtmId: process.env.REACT_APP_GTM_KEY || 'undefined',
        };
        TagManager.initialize(tagManagerArgs);
    }, []);

    return null;
};

export default GTM;
