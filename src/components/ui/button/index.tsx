import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  // Simplified inline styles.
  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "0.5rem",
    backgroundColor: "#3B82F6",
    color: "white",
    fontSize: "1rem",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  return (
    <button style={buttonStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;
