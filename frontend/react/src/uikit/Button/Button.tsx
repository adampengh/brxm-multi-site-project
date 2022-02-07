import React from 'react';

interface ButtonProps {
    active?: boolean;
    children?: any;
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    prefix?: string;
    size?: string;
    style?: string;
    text?: string;
    value?: string;
    variant?: string;
    [property: string]: any;
}

export const Button = ({
    active = false,
    children,
    className,
    disabled = false,
    onClick,
    prefix = 'button',
    size,
    style,
    text,
    value,
    variant = 'primary',
}: ButtonProps) => {
    let classes = `${prefix}`;
    classes += active ? ` active` : '';
    classes += variant ? ` ${prefix}-${variant}` : '';
    classes += size ? ` ${prefix}-${size}` : '';
    classes += style ? ` ${prefix}-${style}` : '';
    classes += className ? ` ${className}` : '';

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
            value={value}
        >
            { text && <span>{ text }</span> }
            { children }
        </button>
    )
};
