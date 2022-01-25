import React from 'react';

interface ButtonProps {
    active?: boolean;
    className?: string;
    disabled?: boolean;
    prefix?: string;
    size?: string;
    style?: string;
    text: string;
    variant?: string;
}

export const Button = ({
    active = false,
    className,
    disabled = false,
    prefix = 'button',
    size,
    style,
    text,
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
            onClick={(event) => console.log(event.target)}
        >
            <span>{ text }</span>
        </button>
    )
};
