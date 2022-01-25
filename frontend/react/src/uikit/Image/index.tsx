import React from 'react';

interface ImageProps {
    altText: string;
    className?: string;
    src: string;
}

export const Image = ({
    altText,
    className,
    src,
}: ImageProps) => {
    return (
        <img className={`${className ? className : ''}`} src={src} alt={altText} />
    )
};
