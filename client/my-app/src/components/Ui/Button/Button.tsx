import classNames from "classnames";
import { memo } from "react";

import styles from "./Button.module.css";

type variants = "default" | "ghost" | "outline";
type types = "button" | "submit";

interface Props {
    children: string;
    variant?: variants;
    className?: string;
    onClick?: () => void;
    type?: types;
    href?: string;
}

export const Button = memo(
    ({
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
    },
);
