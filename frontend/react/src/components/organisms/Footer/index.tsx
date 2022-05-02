import React, { useContext } from 'react';
import { BrComponent, BrPageContext } from '@bloomreach/react-sdk';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';
import { GlobalElementsContext } from '../../../context/GlobalElementsContext';
import { Container } from '../../../uikit/Layout';

import './Footer.scss';

export const Footer = () => {
    const page = useContext(BrPageContext);
    const { globalElements }: any = useContext(GlobalElementsContext);
    const logoRef = globalElements?.globalElementsFooter?.logo;
    const logo = logoRef && page?.getContent(logoRef);

    return(
        <footer className='footer'>
            <Container className='footer__container'>
                <section className='footer__top'>
                    <div className='footer__logo'>
                        { logo && <img src={logo.getOriginal().getUrl()} alt='logo' /> }
                        <BrComponent path="footerSocial">
                            <FooterSocial />
                        </BrComponent>
                    </div>
                    <BrComponent path="footerMenu">
                        <FooterMenu />
                    </BrComponent>
                </section>

                <p className='footer__copyright'>&copy;{new Date().getFullYear()} Bloomreach, Inc. All Rights Reserved.</p>
            </Container>
        </footer>
    );
}

