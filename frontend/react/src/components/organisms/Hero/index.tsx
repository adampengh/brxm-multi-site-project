import classNames from 'classnames';
import React from 'react';
import { BrManageContentButton, BrProps } from '@bloomreach/react-sdk';

import './Hero.scss';
import ImageCompound from '../../../compounds/ImageCompound';

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
        verticalPosition,
    } = document.getData();

    const className = 'hero';
    return (
        <section className={`${className}`}>
            <BrManageContentButton
                content={document}
            />
            <div className={`${className}__img`}>
                <ImageCompound image={image} />
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
