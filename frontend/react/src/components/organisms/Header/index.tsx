import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrComponent, BrPageContext } from '@bloomreach/react-sdk';
import { GlobalElementsContext } from '../../../context/GlobalElementsContext';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import PromoSlider from '../PromoSlider';

export const Header = () => {
    const page = useContext(BrPageContext);
    const { globalElements }: any = useContext(GlobalElementsContext);
    const logoRef = globalElements?.globalElementsHeader?.logo;
    const logo = logoRef && page?.getContent(logoRef);

    useEffect(() => {
        const header = document.getElementById('header');
        if (header) {
            document.body.style.paddingTop = String(header.offsetHeight) + 'px';
        }
        window.addEventListener('resize', () => document.body.style.paddingTop = String(header?.offsetHeight) + 'px')
        return () => {
            window.addEventListener('resize', () => document.body.style.paddingTop = String(header?.offsetHeight) + 'px')
        };
    });

    return (
        <>
            <header className='header' id='header'>
                {/* <section className='promo-bar'>Promo Bar</section> */}

                <section className='header__main'>
                    <div className='header__main--inner'>
                        <Link to='/' className='header__logo'>
                            { logo ? <img src={logo.getOriginal().getUrl()} alt='logo' /> : <Logo /> }
                        </Link>
                        <BrComponent path="navigation" />
                    </div>
                </section>
            </header>

            <BrComponent path="promoBar">
                <PromoSlider />
            </BrComponent>
        </>
    );
}
