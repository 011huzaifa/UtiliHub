import Button from "./ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto h-[650px] flex md:flex-row flex-col items-center justify-center py-6 px-4 gap-10">
      <div className="w-full flex flex-col justify-center items-center text-center md:items-start md:text-left md:justify-center">
        <h1 className="font-semibold leading-tight">All-in-One Free Online Tools to Convert, Compress, Generate & Optimize Instantly</h1>
        <p className="py-4">
          From PDFs to Images, get everything done in one place — secure, fast & free.
        </p>
        <Button className="">Explore Tools</Button>
      </div>
      <div className="w-full flex justify-center md:justify-end">
        <img src="/images/banner-illustration.svg" className="w-80 md:w-140 object-cover" alt="banner tools image" />
      </div>
    </section>
  );
}
