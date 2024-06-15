"use client";
// libs
import React, { forwardRef } from "react";
import cn from "classnames";
import InputMask from "react-input-mask";
//types
import { InputDateProps } from "./input-date.types";

//styles
import styles from "./input-date.module.css";

export const InputDate = forwardRef(function (
  { className, isError, messageError, ...otherProps }: InputDateProps,
  ref: React.LegacyRef<InputMask> | undefined
) {
  return (
    <div className={className}>
      <InputMask
        ref={ref}
        mask="99.99.9999"
        placeholder="дд.мм.гггг"
        className={cn(styles.input, { [styles.error]: isError })}
        {...otherProps}
      />
      {messageError && <span className={styles.messageError}>{messageError}</span>}
    </div>
  );
});

InputDate.displayName = "InputDate";
