"use client";
// libs
import React, { useEffect } from "react";
import cn from "classnames";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { usePathname, useRouter } from "next/navigation";

//components
import { Input, Logo, Button, Container, Typography, Toggle } from "@/components";

//types
import { LoginProps } from "./login.types";
import { ILogin, ILoginError } from "@/types/login.types";

//styles
import styles from "./login.module.css";

//api
import { serverLogin } from "@/services";
import { schemeLogin } from "./login.validate";
import { useAuth } from "@/context";

export function Login({ className, children, ...otherProps }: LoginProps) {
  const router = useRouter();
  const { isAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
    setError,
  } = useForm<ILogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schemeLogin),
  });

  const clearErrorRoot = () => clearErrors("root");

  const onSubmit = async (data: ILogin) => {
    try {
      await serverLogin(data);
      router.replace("/courses");
    } catch (error) {
      if (axios.isAxiosError<ILoginError>(error)) {
        const response = await error.response;
        setError("root.detail", { message: response?.data.detail });
      }
    }
  };

  useEffect(() => {
    if (isAuth) router.replace("/courses");
  }, [isAuth, router]);

  return (
    <main className={cn([styles.login, className])} {...otherProps}>
      <Container>
        <div className={styles.wrapper}>
          <Logo className={styles.logo} />
          <Typography className={styles.title} variant="title">
            Вход в личный кабинет
          </Typography>

          <Toggle
            isToggle={!!errors.root?.detail}
            firstElement={
              <Typography className={cn([styles.subtitle, styles.error])} variant="text">
                Неверный логин или пароль
              </Typography>
            }
            secondElement={
              <Typography className={styles.subtitle} variant="text">
                Для авторизации введите логин и пароль из письма
              </Typography>
            }
          />
          <form className={styles.from} onSubmit={handleSubmit(onSubmit)} onFocus={clearErrorRoot}>
            <Input
              className={styles.log}
              placeholder="Логин"
              {...register("email")}
              isError={!!Object.keys(errors).length}
            />
            <Input
              className={styles.password}
              placeholder="Ваш пароль"
              type="password"
              {...register("password")}
              isError={!!Object.keys(errors).length}
            />
            <Button disabled={!isValid} type="submit">
              Войти
            </Button>
          </form>
        </div>
      </Container>
    </main>
  );
}
