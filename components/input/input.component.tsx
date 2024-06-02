// libs
import React from "react";
import cn from "classnames";

//types
import { InputProps } from "./input.types";

//styles
import styles from "./input.module.css";

export function Input({ className, children, ...otherProps }: InputProps) {
  return <input className={cn([styles.input, className])} {...otherProps} />;
}
