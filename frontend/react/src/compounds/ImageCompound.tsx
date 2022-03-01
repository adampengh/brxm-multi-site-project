import React, { useContext } from 'react';
import { ImageSet, Reference } from '@bloomreach/spa-sdk';
import { BrPageContext } from '@bloomreach/react-sdk';

interface ImageCompoundProps {
    image: {
        altText: string;
        desktopImage?: Reference;
        mobileImage: Reference;
        tabletImage?: Reference;
    }
}

const ImageCompound = ({ image }: ImageCompoundProps) => {
    const page = useContext(BrPageContext);
    const {
        altText,
        desktopImage,
        mobileImage,
        tabletImage,
    } = image;

    const mobileImg = mobileImage && page?.getContent<ImageSet>(mobileImage);
    const tabletImg = tabletImage && page?.getContent<ImageSet>(tabletImage);
    const desktopImg = desktopImage && page?.getContent<ImageSet>(desktopImage);

    return (
        <picture>
            { desktopImg && <source srcSet={ desktopImg?.getOriginal()?.getUrl() } media="(min-width: 1025px)" /> }
            { tabletImg && <source srcSet={ tabletImg?.getOriginal()?.getUrl() } media="(min-width: 768px) and (max-width: 1024px)" /> }
            <source srcSet={ mobileImg?.getOriginal()?.getUrl() } media="(max-width: 767px)" />
            <img src={ mobileImg?.getOriginal()?.getUrl() } alt={ altText } />
        </picture>
    )
}

export default ImageCompound;
