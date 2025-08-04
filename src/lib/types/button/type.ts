import { ButtonHTMLAttributes, CSSProperties } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  isLoading?: boolean;
}
