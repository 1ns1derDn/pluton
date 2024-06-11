"use client";
// libs
import React from "react";
import cn from "classnames";

//types
import { BuyMeetingMeditationProps } from "./buy-meeting-meditation.types";

//styles
import styles from "./buy-meeting-meditation.module.css";
import { Button, Container, Input, Logo, Select, Typography } from "@/components";

export function BuyMeetingMeditation({
  className,
  children,
  ...otherProps
}: BuyMeetingMeditationProps) {
  return (
    <div className={cn([styles.buyMeetingMeditation, className])} {...otherProps}>
      <Container>
        <div className={styles.inner}>
          <Logo className={styles.logo} />
          <Typography className={styles.title} variant="title">
            Медитация на встречу второй половинки
          </Typography>
          <Typography className={styles.text} variant="text">
            Введите почту на которую прийдет логин и пароль для входа в личный кабинет
          </Typography>
          <form className={styles.form}>
            <Input className={styles.email} placeholder="E-mail" />
            <Select className={styles.select} placeholder="Выберите валюту" name="price" />
            <Button className={styles.button}>Купить</Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
