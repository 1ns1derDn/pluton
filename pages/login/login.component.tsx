// libs
import React from "react";
import cn from "classnames";

//components
import { Input, Logo, Button } from "@/components";

//types
import { LoginProps } from "./login.types";

//styles
import styles from "./login.module.css";

export function Login({ className, children, ...otherProps }: LoginProps) {
  return <main className={cn([styles.login, className])} {...otherProps}>
    
  </main>;
}
