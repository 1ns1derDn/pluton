"use client";
// libs
import React, { useEffect, useState } from "react";
import cn from "classnames";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//types
import { IBuyPlutonMeditationProps } from "./buy-pluton-meditation.types";

//styles
import styles from "./buy-pluton-meditation.module.css";
import { Button, Container, Input, Logo, Select, Typography, InputDate } from "@/components";

//api
import { serverAvailablePeriods } from "@/services/available-periods.api";
import { Controller, useForm } from "react-hook-form";
import { serverCreatePayment } from "@/services";
import { useRouter } from "next/navigation";

const YYYY = 2;
const MM = 1;
const DD = 0;

interface IBuyPlutonMeditationForm {
  email: string;
  currency: {
    label: string;
    value: string;
  };
  date_of_birth: string;
  type_subscription: string;
}

const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/;

function isValidDate(dateString?: string) {
  if (!dateString) return false;
  return dateRegex.test(dateString);
}

const validate = yup.object({
  currency: yup
    .object({
      label: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Выберите валюту"),
  date_of_birth: yup
    .string()
    .required("Введите дату рождения")
    .test("date", "Неверная дата", (value) => {
      return isValidDate(value);
    }),
  email: yup.string().email("email не валидный").required("Введите email"),
  type_subscription: yup.string().required(),
});

export function BuyPlutonMeditation({
  className,
  children,
  ...otherProps
}: IBuyPlutonMeditationProps) {
  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
  } = useForm<IBuyPlutonMeditationForm>({
    defaultValues: {
      currency: null!,
      date_of_birth: "",
      email: "",
      type_subscription: "pluton_meditation",
    },
    resolver: yupResolver(validate),
  });
  const [currency, setCurrency] = useState<string[]>();
  const router = useRouter();
  const onSubmit = async ({ currency, date_of_birth, ...data }: IBuyPlutonMeditationForm) => {
    const date = date_of_birth.split(".");

    try {
      const response = await serverCreatePayment({
        currency: currency.value,
        date_of_birth: `${date[YYYY]}-${date[MM]}-${date[DD]}`,
        ...data,
      });

      router.push(response.data.payment_url);
    } catch (error) {
      console.log(error);
    }
  };

  const load = async () => {
    const response = await serverAvailablePeriods();
    const newSet = new Set(response.data.map((item) => item.currency_code));
    setCurrency(Array.from(newSet));
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className={cn([styles.buyPlutonMeditation, className])} {...otherProps}>
      <Container>
        <div className={styles.inner}>
          <Logo className={styles.logo} />
          <Typography className={styles.title} variant="title">
            PlutoN Meditation
          </Typography>
          <Typography className={styles.text} variant="text">
            Введите почту на которую придет логин и пароль для входа в личный кабинет и дату
            рождения, в формате: день, месяц, год (полностью).
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
              {...register("email")}
              className={styles.email}
              placeholder="E-mail"
              isError={!!errors.email}
              messageError={errors.email?.message}
            />
            <Controller
              control={control}
              name="date_of_birth"
              render={({ field }) => (
                <InputDate
                  className={styles.date}
                  {...field}
                  isError={!!errors.date_of_birth}
                  messageError={errors.date_of_birth?.message}
                />
              )}
            />
            <Controller
              name="currency"
              control={control}
              render={({ field }) => (
                <Select
                  isError={!!errors.currency}
                  messageError={errors.currency?.message}
                  className={styles.select}
                  options={currency?.map((currency) => ({
                    label: currency,
                    value: currency,
                  }))}
                  placeholder="Выберите валюту"
                  {...field}
                />
              )}
            />

            <Button className={styles.button}>Купить</Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
