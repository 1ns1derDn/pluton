"use client";
// libs
import React from "react";
import { useForm } from "react-hook-form";

//types
import { FeedbackProps } from "./feedback.types";

//styles
import styles from "./feedback.module.css";

//components
import { Typography, Textarea, Button } from "@/components";
import { IFeedback } from "@/types/feedback.types";
import { serverFeedback } from "@/services/feedback.api";
import { StatusCode } from "@/core/axios";
import { toast } from "react-toastify";

//api

export function Feedback({ className, children, ...otherProps }: FeedbackProps) {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<IFeedback>({
    defaultValues: {
      feedback: "",
    },
  });

  const onSubmit = async (data: IFeedback) => {
    try {
      const response = await serverFeedback(data);

      if (response.status === StatusCode.Success) {
        toast("Отзыв отправлен", { type: "success", position: "top-right" });
      }
    } catch (error) {
      toast("Что-то пошло не так, обратитесь в техподдержку", {
        type: "error",
        position: "top-right",
      });
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} {...otherProps}>
      <Typography className={styles.title} variant="subtitle">
        Буду благодарна за оставленный отзыв
      </Typography>
      <Textarea className={styles.textarea} {...register("feedback")} />
      <Button>Отправить</Button>
    </form>
  );
}
