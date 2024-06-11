"use client";
// libs
import React, { useId } from "react";
import cn from "classnames";
import ReactSelect from "react-select";
//types
import { SelectProps } from "./select.types";

//styles
import styles from "./select.module.css";

export function Select({ className, name, ...otherProps }: SelectProps) {
  return (
    <div className={cn([styles.select, className])}>
      <ReactSelect
        classNamePrefix="select"
        instanceId={useId()}
        components={{
          IndicatorSeparator: null,
        }}
        {...otherProps}
      />
    </div>
  );
}
