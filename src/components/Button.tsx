import React, { ReactNode, MouseEvent } from "react";

type Props = {
    type: "submit" | "button";
    color: | "primary" | "secondary"| "success" | "danger" | "warning" | "info" | "light" |"dark"  | "link";
    children: ReactNode;
    outline?: boolean;
    size?: "sm" | "lg";
    block?: boolean;
    active?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = ({
    type,
    color,
    outline,
    size,
    block,
    active,
    disabled,
    onClick,
    children,
}) => {
    const click = (event: MouseEvent<HTMLButtonElement, MouseEvent> | any) => {
        if (onClick) {
            onClick(event);
        }
    };
    return (
        <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
            <button
                type={type}
                disabled={disabled}
                onClick={click}
                className={`btn btn${outline ? "-outline" : ""}-${color} ${size ? `btn-${size}` : ""
                    } ${block ? `btn-block` : ""} ${active ? `active` : ""}`}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
