import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BrComponent } from '@bloomreach/react-sdk';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Header = () => {
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
        <header className='header' id='header'>
            <section className='promo-bar'>Promo Bar</section>

            <section className='header__primary'>
                <div className='header__primary--inner'>
                    <Link to='/' className='header__logo'>
                        <Logo />
                    </Link>
                    <BrComponent path="navigation" />
                </div>
            </section>
        </header>
    );
}
