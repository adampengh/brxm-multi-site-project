import React, { useContext } from 'react';
import { ImageSet, Reference } from '@bloomreach/spa-sdk';
import { BrPageContext } from '@bloomreach/react-sdk';
import { Picture } from '../uikit/Picture';

interface ImageCompoundProps {
    image: {
        altText: string;
        unsplash?: any;
        desktopImage?: Reference;
        mobileImage?: Reference;
        tabletImage?: Reference;
    }
}

const ImageCompound = ({ image }: ImageCompoundProps) => {
    const page = useContext(BrPageContext);
    const {
        altText,
        unsplash: unsplashRef,
        desktopImage: desktopImageRef,
        mobileImage: mobileImageRef,
        tabletImage: tabletImageRef,
    } = image;

    const unsplash = unsplashRef && JSON.parse(unsplashRef);
    const mobileImage = mobileImageRef && page?.getContent<ImageSet>(mobileImageRef);
    const tabletImage = tabletImageRef && page?.getContent<ImageSet>(tabletImageRef);
    const desktopImage = desktopImageRef && page?.getContent<ImageSet>(desktopImageRef);

    return (
        <>
            {unsplash
                ? <Picture
                    altText={unsplash?.urls?.alt?.description}
                    mobileImage={unsplash.urls.small}
                    tabletImage={unsplash.urls.regular}
                    desktopImage={unsplash.urls.full}
                />
                : <Picture
                    altText={altText}
                    mobileImage={mobileImage?.getOriginal()?.getUrl()}
                    tabletImage={tabletImage?.getOriginal()?.getUrl()}
                    desktopImage={desktopImage?.getOriginal()?.getUrl()}
                />
            }
        </>
    )
}

export default ImageCompound;
