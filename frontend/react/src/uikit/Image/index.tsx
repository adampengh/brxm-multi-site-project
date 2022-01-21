import React from 'react';

interface ImageProps {
    altText: string;
    className?: string;
    source: string;
}

export const Image = ({
    altText,
    className,
    source = 'https://via.placeholder.com/800x800',
}: ImageProps) => {
    return (
        <img className={`${className ? className : ''}`} src={source} alt={altText} />
    )
};
