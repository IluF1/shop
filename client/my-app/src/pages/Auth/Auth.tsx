import { useState } from "react";

import { Button } from "@/components/Ui/Button";
import { Input } from "@/components/Ui/Input";
import { Text } from "@/components/Ui/Text";

import styles from "./Auth.module.css";

export const Auth = () => {
    const [isReg, setIsReg] = useState<boolean>(false);
    const [logInViaLogin, setLogInViaLogin] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <div className={styles.authForm_block}>
                <Text>Войдите в свой аккаунт</Text>
                <form className={styles.form}>
                    {logInViaLogin ? (
                        <Input placeholder="Ваш логин" />
                    ) : (
                        <Input
                            placeholder="Ваша почта"
                            className={styles.input}
                        />
                    )}
                    {isReg && (
                        <div>
                            <Input
                                placeholder="Ваш логин"
                                className={styles.input}
                            />
                        </div>
                    )}
                    <Input placeholder="Ваш пароль" type="password" />
                    <div className={styles.buttons}>
                        <Button>
                            {isReg ? "Зарегистрироваться" : "Войти"}
                        </Button>
                        {!isReg ? (
                            <>
                                <Button
                                    variant="outline"
                                    className={styles.button}
                                    onClick={() => setLogInViaLogin(true)}
                                >
                                    Войти через логин
                                </Button>
                                <Button
                                    variant="outline"
                                    className={styles.button}
                                    onClick={() => setIsReg(true)}
                                >
                                    Зарегистрироваться
                                </Button>
                            </>
                        ) : (
                            <Button
                                className={styles.button}
                                variant="ghost"
                                onClick={() => setIsReg(false)}
                            >
                                Есть аккаунт? Войти
                            </Button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
