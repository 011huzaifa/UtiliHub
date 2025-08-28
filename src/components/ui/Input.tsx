"use client";
import { ChangeEvent } from "react";

interface props {
  placeholder: string;
  type: string;
  onChange?: (value: string) => void;
  width? :string;
}
const Input = ({ placeholder, type,width, onChange }: props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-400 outline-none p-2 placeholder:text-gray-500 ${width}`}
      onChange={handleChange}
    />
  );
};
export default Input;
