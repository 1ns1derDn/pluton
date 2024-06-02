import { ComponentProps, ElementType, ReactNode } from "react";

export type ButtonOwnProps<E extends ElementType = ElementType> = {
  children?: ReactNode;
  as?: E;
  className?: string;
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;
