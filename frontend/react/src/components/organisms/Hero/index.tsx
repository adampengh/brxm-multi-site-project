import classNames from 'classnames';
import React from 'react';
import { Picture } from '../../../uikit/Picture';
import { BrManageContentButton, BrProps } from '@bloomreach/react-sdk';

import './Hero.scss';

export const Hero = ({ component, page}: BrProps) => {
    const { document: documentRef } = component.getModels();
    const document = documentRef && page.getContent(documentRef);

    if (!document) {
        return null;
    }

    const {
        fullHeightTextBox,
        horizontalPosition,
        html,
        image,
        unsplashImage,
        verticalPosition,
    } = document.getData();

    console.log(document.getData())

    const unsplash = unsplashImage && JSON.parse(unsplashImage);
    console.log('unsplash', unsplash);

    const {
        altText,
        mobileImage: mobileImageRef,
        tabletImage: tabletImageRef,
        desktopImage: desktopImageRef,
    } = image;

    const mobileImage = mobileImageRef && page.getContent(mobileImageRef);
    const tabletImage = tabletImageRef && page.getContent(tabletImageRef);
    const desktopImage = desktopImageRef && page.getContent(desktopImageRef);

    console.log(mobileImage.getOriginal().getUrl());
    console.log(desktopImage);

    const className = 'hero';
    return (
        <section className={`${className}`}>
            <BrManageContentButton
                content={document}
            />
            <div className={`${className}__img`}>
                {unsplash
                    ? <Picture
                        altText={unsplash.urls.alt_description}
                        mobileImage={unsplash.urls.small}
                        tabletImage={unsplash.urls.regular}
                        desktopImage={unsplash.urls.full}
                    />
                    : <Picture
                        altText={altText}
                        mobileImage={mobileImage.getOriginal().getUrl()}
                        tabletImage={tabletImage?.getOriginal()?.getUrl()}
                        desktopImage={desktopImage?.getOriginal()?.getUrl()}
                    />
                }
            </div>


            <div
                className={classNames(
                    `${className}__text`,
                    fullHeightTextBox && 'full-height',
                    horizontalPosition && `h-${horizontalPosition}`,
                    verticalPosition && `v-${verticalPosition}`,
                )}
            >
                <div dangerouslySetInnerHTML={{ __html: html.value }}/>
            </div>
        </section>
    );
}
