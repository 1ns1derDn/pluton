"use client";
// libs
import React from "react";
import cn from "classnames";
import InputMask from "react-input-mask";
//types
import { InputDateProps } from "./input-date.types";

//styles
import styles from "./input-date.module.css";

export function InputDate({ className, ...otherProps }: InputDateProps) {
  return (
    <InputMask
      mask="99.99.9999"
      placeholder="дд.мм.гггг"
      className={cn(styles.input, className)}
      {...otherProps}
    />
  );
}
