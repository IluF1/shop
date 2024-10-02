import classNames from "classnames";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import styles from "./Input.module.css";

type inputTypes = "password" | "email" | "text";

interface Props {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    type?: inputTypes;
}

export const Input = ({
    className,
    placeholder,
    value,
    onChange,
    type = "text",
}: Props) => {
    const [show, setShow] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <input
                type={show ? "text" : type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className={classNames(
                    styles[type === "password" ? "password" : "input"],
                    className,
                )}
            />
            {type === "password" && (
                <button
                    onClick={() => setShow(!show)}
                    className={styles.eye_button}
                >
                    {show ? (
                        <Eye className={styles.eye} />
                    ) : (
                        <EyeOff className={styles.eye} />
                    )}
                </button>
            )}
        </div>
    );
};
