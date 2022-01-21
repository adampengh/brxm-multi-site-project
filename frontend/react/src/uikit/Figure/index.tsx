import React from 'react';
import { Image } from '../Image';
interface FigureProps {
    altText: string;
    caption?: string;
    className?: string;
    source: string;
}

export const Figure = ({
    altText,
    caption,
    className,
    source = 'https://via.placeholder.com/800x800',
}: FigureProps) => {
    return (
        <figure className={`${className ? className : ''}`}>
            <Image source={source} altText={altText} />
            {caption && <figcaption>{ caption }</figcaption> }
        </figure>
    )
};
