import Link from "next/link";
import Image from "next/image";

interface LogoProps{
  type: "light" | "dark";
}
const SiteLogo = ({type}: LogoProps) => {
  return (
    <Link href="/" className="flex items-end gap-2">
      <Image
        src="/images/logo.webp"
        alt="Logo"
        width={50}
        height={30}
        priority
        className={`${type==="dark"?"mix-blend-darken": "filter brightness-200"}`}
      />
      <span className="text-2xl font-semibold">UtiliHub</span>
    </Link>
  );
};
export default SiteLogo;
