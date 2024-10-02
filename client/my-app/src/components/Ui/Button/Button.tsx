import classNames from "classnames";

import styles from "./Button.module.css";

type variants = "default" | "ghost" | "outline";
type types = "button" | "submit";

interface Props {
    children: string;
    variant?: variants;
    className?: string;
    onClick?: () => void;
    type?: types;
}

export const Button = ({
    children,
    className,
    variant = "default",
    onClick,
    type = "button",
}: Props) => {
    return (
        <button
            className={classNames(styles[variant], className)}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
