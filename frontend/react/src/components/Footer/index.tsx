import React, { useContext } from 'react';
import { BrComponent, BrPageContext } from '@bloomreach/react-sdk';
import { GlobalElementsContext } from '../../context/GlobalElementsContext';

import './Footer.scss';

export const Footer = () => {
    const page = useContext(BrPageContext);
    const { globalElements }: any = useContext(GlobalElementsContext);
    const logoRef = globalElements?.globalElementsFooter?.logo;
    const logo = logoRef && page?.getContent(logoRef);
    console.log('logo', logo);

    return(
        <footer className="footer">
            <div className="container">
                { logo && <img src={logo.getOriginal().getUrl()} alt='logo' /> }
                <div className="">&copy;{new Date().getFullYear()} Bloomreach</div>
                <div className="">
                    <BrComponent path="footer" />
                </div>
            </div>
        </footer>
    );
}

