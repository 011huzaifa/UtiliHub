"use client";
import { useRef, useState } from "react";
import Button from "../Button";
import Input from "../Input";
import MobileNav from "../MobileNav";
import Navbar from "../Navbar";
import SideBar from "../Sidebar";
import SiteLogo from "../SIteLogo";
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  return (
    <header className="relative h-20 container mx-auto py-6">
      <div className="w-full flex items-end justify-between px-4">
        <div className="nav-wrapper flex items-end gap-x-7">
          <div className="brand">
            <SiteLogo type="dark" />
          </div>
          <div className="navbar hidden md:block">
            <Navbar />
          </div>
        </div>
        <div className="search relative hidden md:block">
          <Input type="search" placeholder="Search..." />
          <SearchOutlined className="absolute right-2 top-1/5 text-xl text-gray-500" />
        </div>

        <div className="mobile-navbar-menu md:hidden">
          <Button
            onClick={() => {setIsNavOpen(!isNavOpen)}}
            type="button"
            aria-controls="sidebar"
            aria-expanded={isNavOpen}
          >
           {isNavOpen? <CloseOutlined />: <MenuOutlined />}
          </Button>
        </div>
        <SideBar
        onClose={()=>setIsNavOpen(false)}
        open={isNavOpen}
          id="sidebar"
          aria-label="sidebar navigation"
          className={`fixed left-0 top-0 h-full px-4 py-6 transition-transform ease-in-out duration-500 transform ${
            isNavOpen == true ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SiteLogo type="light" />
          <div className="my-10 flex flex-col gap-4">
            <Input type="search" placeholder="Search..." />
            <MobileNav />
          </div>
        </SideBar>
      </div>
    </header>
  );
};

export default Header;
