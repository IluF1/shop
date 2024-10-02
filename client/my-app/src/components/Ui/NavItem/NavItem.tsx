import classNames from "classnames";

import styles from "./NavItem.module.css";

interface Props {
    className?: string;
    children: string;
    href: string;
}

export const NavItem = ({ className, children, href }: Props) => {
    return (
        <a
            href={href}
            className={classNames(
                styles[window.location.href === href ? "active" : "item"],
                className,
            )}
        >
            {children}
        </a>
    );
};
