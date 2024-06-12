"use client";
// react
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";

// types
import { DialogProps, DialogRef } from "./dialog.types";

// lib
import cn from "classnames";

import styles from "./dialog.module.css";

export const Dialog = forwardRef<DialogRef, DialogProps>(
  ({ children, defaultOpened = false, onClose, className, bodyClassName, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpened);

    const close = useCallback(() => {
      setIsOpen(false);
      onClose && onClose();
    }, [onClose]);

    let DOMElement = null;

    if (typeof window !== "undefined") {
      DOMElement = document.getElementById("dialog");
    }

    useImperativeHandle(
      ref,
      () => ({
        open: () => setIsOpen(true),
        close,
      }),
      [close]
    );

    useEffect(() => {
      const handleEscClose = (e: KeyboardEvent): void => {
        if (e.key === "Escape") {
          close();
        }
      };
      window.addEventListener("keydown", handleEscClose);

      return () => {
        window.removeEventListener("keydown", handleEscClose);
      };
    }, [isOpen, close]);

    return DOMElement
      ? createPortal(
          <>
            {isOpen ? (
              <div className={styles.styled} {...props} onClick={close}>
                <div className={cn(styles.body, bodyClassName)}>
                  <div className={cn(styles.paper, className)}>{children}</div>
                </div>
              </div>
            ) : null}
          </>,
          DOMElement
        )
      : null;
  }
);

Dialog.displayName = "Dialog";
