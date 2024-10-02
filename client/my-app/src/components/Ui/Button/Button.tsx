import classNames from "classnames";

import styles from "./Button.module.css";

type variants = "default" | "ghost" | "outline";

interface Props {
    children: string;
    variant?: variants;
    className?: string;
    onClick?: () => void;
}

export const Button = ({
    children,
    className,
    variant = "default",
    onClick,
}: Props) => {
    return (
        <button
            className={classNames(styles[variant], className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
