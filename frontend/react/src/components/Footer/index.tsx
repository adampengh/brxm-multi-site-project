import React from 'react';
import { BrComponent } from '@bloomreach/react-sdk';

import './Footer.scss';

export const Footer = () => {
    return(
        <footer className="footer text-light py-3">
            <div className="container clearfix">
                <div className="float-left pr-3">&copy;{new Date().getFullYear()} Bloomreach</div>
                <div className="overflow-hidden">
                    <BrComponent path="footer" />
                </div>
            </div>
        </footer>
    );
}

