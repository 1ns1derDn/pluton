import { Props } from "react-select";

export interface SelectProps extends Props {
  isError?: boolean;
  messageError?: string;
}
