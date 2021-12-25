import React from 'react';

interface ImageProps {
    altText: string;
    className?: string;
    mobileImage: string;
    tabletImage?: string;
    desktopImage?: string;
}

export const Image = ({
    altText = 'Placeholder',
    className,
    mobileImage = 'https://via.placeholder.com/800x800',
    tabletImage,
    desktopImage,
}: ImageProps) => {
    return (
        <picture className={`${className ? className : ''}`}>
            <source
                srcSet={mobileImage}
                media="(max-width: 767px)" />
            {tabletImage && <source
                srcSet={tabletImage}
                media="(min-width: 768px) and (max-width: 1024px)" /> }
            {desktopImage && <source
                srcSet={desktopImage}
                media="(min-width: 1025px)" /> }
            <img src={mobileImage} alt={altText} />
        </picture>
    )
};
