import React from 'react';
import classNames from 'classnames';

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
        <section className={classNames('container', className)} {...props}>
            { children }
        </section>
    )
};

const Row = ({ children, className, ...props }: RowProps) => {
    return (
        <div className={classNames('row', className)} {...props}>
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
    const columnClass = classNames(
        'column',
        xs && `column-xs-${xs}`,
        sm && `column-sm-${sm}`,
        md && `column-md-${md}`,
        lg && `column-lg-${lg}`,
        xl && `column-xl-${xl}`,
        xxl && `column-xxl-${xxl}`,
        className,
    )

    return (
        <div className={columnClass} {...props}>
            { children }
        </div>
    )
}


export {
    Container,
    Row,
    Column
}
