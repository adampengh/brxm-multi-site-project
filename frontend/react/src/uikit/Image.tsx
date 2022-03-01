import React from 'react';
import classNames from 'classnames';

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
        <img className={classNames(className)} src={src} alt={altText} />
    )
};
