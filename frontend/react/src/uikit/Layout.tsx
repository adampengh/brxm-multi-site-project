import React from 'react';

interface LayoutProps {
    children?: React.ReactNode;
    className?: string;

    [property: string]: any;
}


const Container = ({ className, children, ...props }: LayoutProps) => {
    return (
        <section className={`container ${className ? className : ''}`} {...props}>
            { children }
        </section>
    )
};

const Row = ({ children, className, ...props }: LayoutProps) => {
    return (
        <div className={`row ${className ? className : ''}`} {...props}>
            { children }
        </div>
    )
}

const Column = ({ children, className, ...props }: LayoutProps) => {
    return (
        <div className={`column ${className ? className : ''}`} {...props}>
            { children }
        </div>
    )
}


export {
    Container,
    Row,
    Column
}
