import { ReactNode } from "react";

export interface IToggleProps {
  isToggle: boolean;
  firstElement: ReactNode;
  secondElement?: ReactNode;
}
