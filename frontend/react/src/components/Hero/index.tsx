import React from 'react';

import './Hero.scss';

import { Image } from '../../uikit/Image';

export const Hero = () => {
    const className = 'hero';
    return (
        <section className={`${className}`}>
            <div className={`${className}__img`}>
                <Image
                    altText='Hero Image'
                    mobileImage='https://via.placeholder.com/800x600'
                    tabletImage='https://via.placeholder.com/1200x600'
                    desktopImage='https://via.placeholder.com/1600x600'
                />
            </div>


            <div className={`${className}__text left center`}>
                <div>
                    <h3 className={`${className}__heading`}>Text Heading</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adip lorem. lorem ipsum dolor sit amet, consectetur adip lorem.</p>
                </div>

            </div>
        </section>
    );
}
