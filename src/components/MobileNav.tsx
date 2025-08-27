import Link from "next/link"
import { NavLinks } from "../lib/data/nav-links-data"
const MobileNav = ()=>{
    return <nav className="w-full">
        <ul>
            {NavLinks.map((NavLink, idx)=>(
                <li className="py-2" key={idx}>
                    <Link className="block" href={NavLink.link}>{NavLink.name}</Link>
                </li>
            ))}
        </ul>
    </nav>
}
export default MobileNav