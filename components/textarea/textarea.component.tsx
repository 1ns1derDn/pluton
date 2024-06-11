// libs
import React, { forwardRef } from "react";
import cn from "classnames";

//types
import { TextareaProps } from "./textarea.types";

//styles
import styles from "./textarea.module.css";

function ComponentTextarea(
  { className, children, ...otherProps }: TextareaProps,
  ref: React.LegacyRef<HTMLTextAreaElement>
) {
  return <textarea ref={ref} className={cn([styles.textarea, className])} {...otherProps} />;
}

export const Textarea = forwardRef(ComponentTextarea);
