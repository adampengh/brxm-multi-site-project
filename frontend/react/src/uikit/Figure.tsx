import React from 'react';
import classNames from 'classnames';
import { Image } from './Image';

interface FigureProps {
    altText: string;
    caption?: string;
    className?: string;
    src: string;
}

export const Figure = ({
    altText,
    caption,
    className,
    src,
}: FigureProps) => {
    return (
        <figure className={classNames(className)}>
            <Image src={src} altText={altText} />
            {caption && <figcaption>{ caption }</figcaption> }
        </figure>
    )
};
