import React from 'react';

interface ContainerProps {
    children?: React.ReactNode;
    className?: string;
}

interface RowProps {
    children?: React.ReactNode;
    className?: string;
}

interface ColumnProps {
    children?: React.ReactNode;
    className?: string;
}

const Container = ({ className, children, ...props }: ContainerProps) => {
    return (
        <section className={`container ${className ? className : ''}`} {...props}>
            { children }
        </section>
    )
};

const Row = ({ children, className, ...props }: RowProps) => {
    return (
        <div className={`row ${className}`} {...props}>
            { children }
        </div>
    )
}

const Column = ({ children, className, ...props }: ColumnProps) => {
    return (
        <div className={`column ${className}`} {...props}>
            { children }
        </div>
    )
}


export {
    Container,
    Row,
    Column
}
