"use client";
import { ChangeEvent } from "react";

interface props {
  placeholder: string;
  type: string;
  onChange?: (value: string) => void;
}
const Input = ({ placeholder, type, onChange }: props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-400 outline-none p-2 placeholder:text-gray-500`}
      onChange={handleChange}
    />
  );
};
export default Input;
