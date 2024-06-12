// react
import { ReactNode } from "react";

export interface DialogProps {
  defaultOpened?: boolean;
  children: ReactNode;
  onClose?: () => void;
  className?: string;
  bodyClassName?: string;
}

export interface DialogRef {
  open: () => void;
  close: () => void;
}
