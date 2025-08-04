import { ButtonProps } from "@/lib/types/button/type";
import { forwardRef } from "react";
import styles from "./styles.module.scss";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      width,
      height,
      className,
      disabled,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const loader = <div className={styles["loader"]}></div>;

    return (
      <button
        ref={ref}
        className={`${styles["button-style"]} ${
          disabled || isLoading ? "disabled" : ""
        } ${className || ""}`}
        style={{ width, height }}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? loader : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
