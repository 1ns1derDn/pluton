// libs
import React from "react";
import cn from "classnames";

//types
import { TemplateNameProps } from "./template-name.types";

//styles
import styles from "./template-name.module.css";

export function TemplateName({ className, children, ...otherProps }: TemplateNameProps) {
  return (
    <div className={cn([styles.templateName, className])} {...otherProps}>
      {children}
    </div>
  );
}
