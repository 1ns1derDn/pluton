import { InputHTMLAttributes } from "react";

export interface InputDateProps extends InputHTMLAttributes<HTMLElement> {
  isError?: boolean;
  messageError?: string;
}
