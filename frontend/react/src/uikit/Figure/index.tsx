import React from 'react';
import { Image } from '../Image';
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
        <figure className={`${className ? className : ''}`}>
            <Image src={src} altText={altText} />
            {caption && <figcaption>{ caption }</figcaption> }
        </figure>
    )
};
