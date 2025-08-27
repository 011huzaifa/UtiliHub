import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  width?: string;
}
const Button = ({ label, children, width, ...buttonProps }: ButtonProps) => {
  return (
    <button {...buttonProps} className={`cursor-pointer block ${width} py-2 px-4`}>
      {label || children}
    </button>
  );
};
export default Button;
