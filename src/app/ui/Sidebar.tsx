import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from "react";
interface SideBarProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}
const SideBar = ({ children, open, onClose, ...attributes }: SideBarProps) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    //Handle click outside function
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    //close sidebar on outside click
    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      //cleanup function
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <aside ref={menuRef} {...attributes}>
      {children}
    </aside>
  );
};
export default SideBar;
