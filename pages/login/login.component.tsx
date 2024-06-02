// libs
import React from "react";
import cn from "classnames";

//components
import { Input, Logo, Button, Container, Typography } from "@/components";

//types
import { LoginProps } from "./login.types";

//styles
import styles from "./login.module.css";

export function Login({ className, children, ...otherProps }: LoginProps) {
  return (
    <main className={cn([styles.login, className])} {...otherProps}>
      <Container>
        <div className={styles.wrapper}>
          <Logo className={styles.logo} />
          <Typography className={styles.title} variant="title">
            Вход в личный кабинет
          </Typography>
          <Typography className={styles.subtitle} variant="subtitle">
            Для авторизации введите логин и пароль из письма
          </Typography>
          <form className={styles.from}>
            <Input className={styles.log} placeholder="Логин" />
            <Input className={styles.password} placeholder="Ваш пароль" />
            <Button>Войти</Button>
          </form>
        </div>
      </Container>
    </main>
  );
}
