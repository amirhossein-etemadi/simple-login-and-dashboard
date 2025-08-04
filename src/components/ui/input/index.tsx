import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import { InputProps } from "@/lib/types/input/type";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, type = "text", width, height, disabled, ...props }, ref) => {
    return (
      <div
        className={`${styles["input-container"]} ${
          disabled ? "disabled" : null
        }`}
        style={{ width, height }}
      >
        <input
          id={props.name}
          ref={ref}
          type={type}
          className={styles["input-style"]}
          placeholder=" "
          {...props}
        />
        <label htmlFor={props.name} className={styles["label-style"]}>
          {label}
        </label>

        <p className={styles["error-style"]}>{error || " "}</p>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
