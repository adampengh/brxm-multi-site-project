import React from 'react';

interface ContainerProps {
    children?: React.ReactNode;
    className?: string;

    [property: string]: any;
}


interface RowProps {
    children?: React.ReactNode;
    className?: string;

    [property: string]: any;
}

interface ColumnProps {
    children?: React.ReactNode;
    className?: string;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;

    [property: string]: any;
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
        <div className={`row ${className ? className : ''}`} {...props}>
            { children }
        </div>
    )
}

const Column = ({
    children,
    className,
    xs,
    sm,
    md,
    lg,
    xl,
    xxl,
    ...props
}: ColumnProps) => {
    let classes = '';
    classes += xs ? `column-xs-${xs} ` : '';
    classes += sm ? `column-sm-${sm} ` : '';
    classes += md ? `column-md-${md} ` : '';
    classes += lg ? `column-lg-${lg} ` : '';
    classes += xl ? `column-xl-${xl} ` : '';
    classes += xxl ? `column-xxl-${xxl}` : '';
    classes += className ? className : '';

    return (
        <div className={`column column-sm ${classes}`} {...props}>
            { children }
        </div>
    )
}


export {
    Container,
    Row,
    Column
}
