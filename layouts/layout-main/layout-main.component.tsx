// libs
import React from "react";
import cn from "classnames";
import Image from "next/image";

//types
import { LayoutMainProps } from "./layout-main.types";

//styles
import styles from "./layout-main.module.css";
import { Container, Logo } from "@/components";

export function LayoutMain({ className, children, ...otherProps }: LayoutMainProps) {
  return (
    <main className={cn([styles.layoutMain, className])} {...otherProps}>
      <Container>
        <Logo className={styles.logo} />
        {children}
      </Container>
    </main>
  );
}
