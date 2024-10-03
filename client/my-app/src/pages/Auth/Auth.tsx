import { useState } from "react";

import { Button } from "@/components/Ui/Button";
import { Input } from "@/components/Ui/Input";
import { Text } from "@/components/Ui/Text";

import styles from "./Auth.module.css";

const Auth = () => {
    const [logInViaLogin, setLogInViaLogin] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <div className={styles.authForm_block}>
                <Text>Войдите в свой аккаунт</Text>
                <form className={styles.form}>
                    {logInViaLogin ? (
                        <Input
                            placeholder="Ваш логин"
                            className={styles.input}
                        />
                    ) : (
                        <Input
                            placeholder="Ваша почта"
                            className={styles.input}
                        />
                    )}

                    <Input placeholder="Ваш пароль" type="password" />
                    <div className={styles.buttons}>
                        <Button type="submit">Войти</Button>

                        <Button
                            variant="outline"
                            className={styles.button}
                            onClick={() => setLogInViaLogin(!logInViaLogin)}
                        >
                            {logInViaLogin
                                ? "Войти через почту"
                                : " Войти через логин"}
                        </Button>
                        <a href="/registration">
                            <Button variant="outline" className={styles.button}>
                                Зарегистрироваться
                            </Button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Auth;
