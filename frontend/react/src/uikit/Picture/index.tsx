import React from 'react';

interface PictureProps {
    altText: string;
    className?: string;
    mobileImage: string;
    tabletImage?: string;
    desktopImage?: string;
}

export const Picture = ({
    altText,
    className,
    mobileImage = 'https://via.placeholder.com/800x800',
    tabletImage,
    desktopImage,
}: PictureProps) => {
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
