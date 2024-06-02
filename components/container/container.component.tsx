// libs
import React from "react";
import cn from "classnames";

//types
import { ContainerProps } from "./container.types";

//styles
import styles from "./container.module.css";

export function Container({ className, children, ...otherProps }: ContainerProps) {
  return (
    <div className={cn([styles.container, className])} {...otherProps}>
      {children}
    </div>
  );
}
