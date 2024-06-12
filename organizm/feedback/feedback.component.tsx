"use client";
// libs
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

//types
import { FeedbackProps } from "./feedback.types";
import { IFeedback } from "@/types/feedback.types";

//styles
import styles from "./feedback.module.css";

//components
import { Typography, Textarea, Button } from "@/components";

//api
import { serverFeedback } from "@/services/feedback.api";
import { StatusCode } from "@/core/axios";

//validate
import { schemeFeedback } from "./feedback.validate";

export function Feedback({ className, children, ...otherProps }: FeedbackProps) {
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<IFeedback>({
    defaultValues: {
      feedback: "",
    },
    resolver: yupResolver(schemeFeedback),
  });

  const onSubmit = async (data: IFeedback) => {
    try {
      const response = await serverFeedback(data);

      if (response.status === StatusCode.Success) {
        toast("Отзыв отправлен", { type: "success", position: "top-right" });
      }

      reset();
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
      <Textarea
        isError={!!errors.feedback}
        messageError={errors.feedback?.message}
        className={styles.textarea}
        {...register("feedback")}
      />
      <Button className={styles.button}>Отправить</Button>
    </form>
  );
}
