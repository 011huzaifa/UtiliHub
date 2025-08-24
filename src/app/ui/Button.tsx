import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
}
const Button = ({ label, children, ...buttonProps }: ButtonProps) => {
  return (
    <button {...buttonProps} className="cursor-pointer block w-fit py-2 px-4">
      {label || children}
    </button>
  );
};
export default Button;
