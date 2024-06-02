import { ComponentProps, ElementType, ReactNode } from "react";

export type VariantTypes = "title" | "subtitle" | "text";

export type TypographyOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  variant?: VariantTypes;
  className?: string;
};

export type TypographyProps<E extends ElementType> = TypographyOwnProps<E> &
  Omit<ComponentProps<E>, keyof TypographyOwnProps>;
