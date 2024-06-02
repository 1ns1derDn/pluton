// libs
import { ElementType } from "react";
import cn from "classnames";

// types
import { TypographyProps } from "./typography.types";

// styles
import styles from "./Typography.module.css";

const defaultElement = "div";

export function Typography<E extends ElementType = typeof defaultElement>({
  children,
  as,
  variant = "text",
  className,
  ...otherProps
}: TypographyProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName className={cn(styles[variant], className)} {...otherProps}>
      {children}
    </TagName>
  );
}
