import React, {ReactNode, MouseEvent} from 'react';

type Props = {
    color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
    children: ReactNode;
    outline?: boolean;
    size?: 'sm' | 'lg';
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    onClick?: (event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = ({color,outline, size, block, active, disabled, onClick, children}) => {  
    const click = (event: MouseEvent<HTMLButtonElement, MouseEvent> | any) => {
        if (onClick) {
            onClick(event);
        }
    };
    return (
        <button
        type="button"
        disabled={disabled}
        onClick={click}
        className={
            `btn btn${outline ? '-outline' : ''}-${color} ${size ? `btn-${size}` : ''} ${block ? `btn-block` : ''} ${active ? `active`: ''}`
        }
        >
            {children}
        </button>
    )
}

export default Button;
