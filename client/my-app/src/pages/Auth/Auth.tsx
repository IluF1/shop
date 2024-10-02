import { Button } from "@/components/Ui/Button";
import { Input } from "@/components/Ui/Input";
import { Text } from "@/components/Ui/Text";

import styles from "./Auth.module.css";

export const Auth = () => {
    return (
        <div className={styles.container}>
            <div className={styles.authForm_block}>
                <Text>Войдите в свой аккаунт</Text>
                <form className={styles.form}>
                    <Input placeholder="Ваша почта" className={styles.input} />
                    <Input placeholder="Ваш пароль" type="password" />
                    <div className={styles.buttons}>
                        <Button>Войти</Button>
                        <Button variant="outline" className={styles.button}>
                            Войти через логин
                        </Button>
                        <Button variant="outline" className={styles.button}>
                            Зарегистрироваться
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
