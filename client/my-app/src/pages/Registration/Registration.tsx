import { Button } from "@/components/Ui/Button";
import { Input } from "@/components/Ui/Input";
import { Text } from "@/components/Ui/Text";

import styles from "./Registration.module.css";

const Registration = () => {
    return (
        <div className={styles.container}>
            <div className={styles.registrationForm_block}>
                <Text>Расскажите нам о себе</Text>
                <form className={styles.form}>
                    <Input
                        placeholder="Придумайте логин"
                        className={styles.input}
                    />

                    <Input
                        placeholder="Введите почту"
                        className={styles.input}
                    />

                    <Input
                        placeholder="Введите пароль"
                        type="password"
                        className={styles.input}
                    />
                    <Input
                        placeholder="Повторите ваш пароль"
                        type="password"
                        className={styles.input}
                    />
                    <div className={styles.buttons}>
                        <Button type="submit">Зарегистрироваться</Button>
                        <a href="/auth">
                            <Button variant="ghost" className={styles.button}>
                                Есть аккаунт? Войти
                            </Button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Registration;
