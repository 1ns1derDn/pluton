// libs
import { ElementType } from "react";
import cn from "classnames";

// types
import { ButtonProps } from "./button.types";

// styles
import styles from "./button.module.css";

const defaultElement = "button";

export function Button<E extends ElementType = typeof defaultElement>({
  children,
  as,
  variant = "primary",
  className,
  Icon,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName className={cn(styles.button, className)} {...otherProps}>
      {children}
    </TagName>
  );
}
