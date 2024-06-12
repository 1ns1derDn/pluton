// libs
import React, { forwardRef } from "react";
import cn from "classnames";

//types
import { TextareaProps } from "./textarea.types";

//styles
import styles from "./textarea.module.css";

function ComponentTextarea(
  { className, children, isError, messageError, ...otherProps }: TextareaProps,
  ref: React.LegacyRef<HTMLTextAreaElement>
) {
  return (
    <div className={cn([styles.wrapper, className])}>
      <textarea
        ref={ref}
        className={cn([styles.textarea, { [styles.error]: isError }])}
        {...otherProps}
      />
      {messageError && <span className={styles.messageError}>{messageError}</span>}
    </div>
  );
}

export const Textarea = forwardRef(ComponentTextarea);
