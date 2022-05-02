import React from 'react';
import CookieConsent from 'react-cookie-consent';

const BrCookieConsent = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText='Accept'
            cookieName="BrCookieConsent"
            style={{ background: '#2B373B' }}
            buttonStyle={{ color: '#4e503b', fontSize: '14px' }}
            expires={150}
        >
            This website uses cookies to enhance the user experience.
        </CookieConsent>
    )
}

export default BrCookieConsent;
