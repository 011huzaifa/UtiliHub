"use client";
import Link from "next/link";
import { NavLinks } from "../lib/data/nav-links";
const Navbar = () => {
  return <nav className="w-full">
    <ul className="flex items-center">
        {NavLinks.map((NavLink, idx)=>(
            <li className="px-3" key={idx}>
                <Link className="block text-lg" href={NavLink.link}>{NavLink.name}</Link>
            </li>
        ))}
    </ul>
  </nav>;
};
export default Navbar;
