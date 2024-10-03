import classNames from "classnames";
import { memo } from "react";

import styles from "./Text.module.css";

type tags = "h1" | "h2" | "h3" | "p";

interface Props {
    children: string;
    tag?: tags;
    className?: string;
}

export const Text = memo(({ children, className, tag = "h1" }: Props) => {
    const Tag = tag;

    return <Tag className={classNames(styles[Tag], className)}>{children}</Tag>;
});
