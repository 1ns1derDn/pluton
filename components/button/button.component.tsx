// libs
import { ElementType, LegacyRef, forwardRef } from "react";
import cn from "classnames";

// types
import { ButtonProps } from "./button.types";

// styles
import styles from "./button.module.css";

const defaultElement = "button";

export function ComponentButton<E extends ElementType = typeof defaultElement>(
  { children, as, variant = "primary", className, Icon, ...otherProps }: ButtonProps<E>,
  ref: LegacyRef<any>
) {
  const TagName = as || defaultElement;

  return (
    <TagName ref={ref} className={cn(styles.button, className)} {...otherProps}>
      {children}
    </TagName>
  );
}

export const Button = forwardRef(ComponentButton);
