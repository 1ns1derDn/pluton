// libs
import React, { LegacyRef, forwardRef } from "react";
import cn from "classnames";
//types
import { InputProps } from "./input.types";

//styles
import styles from "./input.module.css";

function ComponentInput(
  { className, children, isError, messageError, ...otherProps }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <div className={className}>
      <input
        ref={ref}
        className={cn([
          styles.input,
          {
            [styles.error]: isError,
          },
        ])}
        {...otherProps}
      />
      {messageError && <span className={styles.messageError}>{messageError}</span>}
    </div>
  );
}

export const Input = forwardRef(ComponentInput);
