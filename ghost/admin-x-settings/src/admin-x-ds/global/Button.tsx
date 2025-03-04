import React from 'react';

export type ButtonColor = 'clear' | 'black' | 'green' | 'red';

export interface IButton {
    label: string;
    key?: string;
    color?: string;
    fullWidth?: boolean;
    link?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({
    label,
    color,
    fullWidth,
    link,
    disabled,
    onClick,
    ...props
}) => {
    if (!color) {
        color = 'clear';
    }
    
    let styles = 'transition flex items-center justify-center rounded-sm text-sm';
    styles += ((link && color !== 'clear' && color !== 'black') || (!link && color !== 'clear')) ? ' font-bold' : ' font-semibold';
    styles += !link ? ' px-4 h-9' : '';

    switch (color) {
    case 'black':
        styles += link ? ' text-black hover:text-grey-800' : ' bg-black text-white hover:bg-grey-900';
        break;
    case 'green':
        styles += link ? ' text-green hover:text-green-400' : ' bg-green text-white hover:bg-green-400';
        break;
    case 'red':
        styles += link ? ' text-red hover:text-red-400' : ' bg-red text-white hover:bg-red-400';
        break;
    default:
        styles += link ? ' text-black hover:text-grey-800' : ' bg-transparent text-black hover:text-grey-800';
        break;
    }

    styles += (fullWidth && !link) ? ' w-full' : '';
    styles += (disabled) ? ' opacity-40' : ' cursor-pointer';

    return (
        <button
            className={styles}
            disabled={disabled}
            type="button"
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;