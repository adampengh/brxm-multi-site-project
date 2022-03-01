import React from 'react';
import classNames from 'classnames';

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

export const Button: ButtonProps = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
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
    }, ref) => {
        const buttonClass = classNames(
            prefix,
            active && 'active',
            variant && `${prefix}-${variant}`,
            size && `${prefix}-${size}`,
            style && `${prefix}-${style}`,
            className
        );

        return (
            <button
                className={buttonClass}
                disabled={disabled}
                onClick={onClick}
                value={value}
                ref={ref}
            >
                { text && <span>{ text }</span> }
                { children }
            </button>
        )
    }
);

Button.displayName = 'Button';
