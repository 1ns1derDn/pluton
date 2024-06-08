// libs
import React from "react";
import cn from "classnames";

//types
import { TextareaProps } from "./textarea.types";

//styles
import styles from "./textarea.module.css";

export function Textarea({ className, children, ...otherProps }: TextareaProps) {
  return <textarea className={cn([styles.textarea, className])} {...otherProps} />;
}
