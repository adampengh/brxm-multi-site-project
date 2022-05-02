import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';

const BrPixel = () => {
    const cookies = new Cookies();
    const accountId = process.env.REACT_APP_BRSM_ACCOUNT_ID;
    const domainKey = process.env.REACT_APP_BRSM_DOMAIN_KEY;

    useEffect(() => {
        if (accountId) {
            (window as any).br_data = {
                page_type: 'search',
                page_labels: '',
                acct_id: accountId,
                type: 'pageview',
            }
        }

        if (domainKey && domainKey.trim() !== '') {
            (window as any).br_data.domain_key = domainKey;
        }

        const brCookieConsent = cookies.get('BrCookieConsent');
        if (brCookieConsent && brCookieConsent === 'true') {
            const brtrk = document.createElement('script');
            brtrk.type = 'text/javascript';
            brtrk.async = true;
            brtrk.src = `//cdns.brsrvr.com/v1/br-trk-${accountId}.js`;
            // Update react cookie with the latest value
            brtrk.addEventListener('load', () => {
                const brUid2 = cookies.get('_br_uid_2');
                cookies.set('_br_uid_2', brUid2, { path: '/' });
            });
            const s = document.getElementsByTagName('script')[0];
            s.parentNode?.insertBefore(brtrk, s);
        }
    }, []);


    return <></>;
};

export default BrPixel;
