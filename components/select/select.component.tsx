"use client";
// libs
import React, { LegacyRef, Ref, forwardRef, useId } from "react";
import cn from "classnames";
import ReactSelect, { GroupBase, SelectInstance } from "react-select";
//types
import { SelectProps } from "./select.types";
//styles
import styles from "./select.module.css";

export const Select = forwardRef(function (
  { className, name, isError, messageError, ...otherProps }: SelectProps,
  ref: LegacyRef<SelectInstance<unknown, boolean, GroupBase<unknown>>> | undefined
) {
  return (
    <div className={cn([styles.select, className, { [styles.error]: isError }])}>
      <ReactSelect
        ref={ref}
        classNamePrefix="select"
        instanceId={useId()}
        components={{
          IndicatorSeparator: null,
        }}
        {...otherProps}
      />
      {messageError && <span className={styles.messageError}>{messageError}</span>}
    </div>
  );
});

Select.displayName = "select";
