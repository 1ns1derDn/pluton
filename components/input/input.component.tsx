// libs
import React, { LegacyRef, forwardRef } from "react";
import cn from "classnames";
//types
import { InputProps } from "./input.types";

//styles
import styles from "./input.module.css";

function ComponentInput(
  { className, children, isError, ...otherProps }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      className={cn([
        styles.input,
        className,
        {
          [styles.error]: isError,
        },
      ])}
      {...otherProps}
    />
  );
}

export const Input = forwardRef(ComponentInput);
