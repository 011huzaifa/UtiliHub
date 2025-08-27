import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { ExploreTools } from "../lib/data/explore-tools-data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container mx-auto h-[90vh] flex md:flex-row flex-col items-center justify-center py-6 px-4 gap-10">
        <div className="w-full flex flex-col justify-center items-center text-center md:items-start md:text-left md:justify-center">
          <h1 className="font-semibold leading-tight">
            All-in-One Free Online Tools to Convert, Compress, Generate &
            Optimize Instantly
          </h1>
          <p className="py-4">
            From PDFs to Images, get everything done in one place — secure, fast
            & free.
          </p>
          <a
            href="#explore-tools"
            className="cursor-pointer block w-fit py-2 px-4 bg-black text-white"
          >
            Explore Tools
          </a>
        </div>
        <div className="w-full flex justify-center md:justify-end">
          <Image
            width={0}
            height={0}
            src="/images/banner-illustration.svg"
            className="w-80 md:w-140 object-cover"
            alt="banner tools image"
          />
        </div>
      </section>
      <section
        id="explore-tools"
        className="container mx-auto h-[90vh] py-6 px-4"
      >
        <h2 className="font-semibold">Explore Tools</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
          {ExploreTools.map((tool, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 border-2 shadow border-b-5 border-r-5 border-slate-900 px-4 py-5 cursor-pointer w-full transform"
            >
              <div className="flex items-center gap-1">
                <Image
                  src={tool.image}
                  className="w-24"
                  width={0}
                  height={0}
                  alt={tool.title}
                  priority
                />
                <div className="w-full">
                  <h4>{tool.title}</h4>
                  <p>{tool.tagline}</p>
                </div>
              </div>
              <Link href={tool.link} className="outlined-btn w-full text-center">
                Try Now <ArrowRightOutlined className="transform -rotate-45" />{" "}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
