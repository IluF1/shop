import classNames from "classnames";
import { Eye, EyeOff } from "lucide-react";
import { memo, useState } from "react";

import styles from "./Input.module.css";

type inputTypes = "password" | "email" | "text";

interface Props {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: () => void;
    type?: inputTypes;
}

export const Input = memo(
    ({ className, placeholder, value, onChange, type = "text" }: Props) => {
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
                        type="button"
                    >
                        {show ? (
                            <Eye
                                className={styles.eye}
                                color="rgb(119, 120, 127)"
                            />
                        ) : (
                            <EyeOff
                                className={styles.eye}
                                color="rgb(119, 120, 127)"
                            />
                        )}
                    </button>
                )}
            </div>
        );
    },
);
