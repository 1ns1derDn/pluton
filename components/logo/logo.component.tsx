// libs
import React from "react";
import cn from "classnames";

//types
import { LogoProps } from "./logo.types";

//styles
import styles from "./logo.module.css";

//svg
import LogoIcon from "./logo.svg";

export function Logo({ className, children, ...otherProps }: LogoProps) {
  return <LogoIcon className={cn([styles.logo, className])} {...otherProps} />;
}
