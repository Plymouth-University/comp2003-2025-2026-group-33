// app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { blogs } from "@/lib/blog";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Blog - Engame",
  description: "Engame blog — gamification, sales and marketing insights.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function BlogPage() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/images/backgrounds/EG---bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
        className="relative"
      >
        <Section zIndex="z-10" bgColor="bg-transparent">
          <div className="flex justify-center py-10">
            <p className="text-center font-montserrat font-extrabold text-4xl max-w-md">
              Let&apos;s fire up the world of blogging🔥
            </p>
          </div>
        </Section>
      </div>

      <Section>
        <ul className="py-10 space-y-10">
          {blogs.map((blog, index) => (
            <li key={`blog-card-${index}`}>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    style={{
                      backgroundImage: `url('${blog.avatar}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="w-10 h-10 rounded-3xl overflow-hidden"
                  />
                  <div className="flex flex-col">
                    <p className="font-lato font-extrabold">{blog.author}</p>
                    <p className="font-lato text-gray-500 font-bold">
                      {blog.datetime}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url('${blog.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="flex-grow flex justify-center items-center relative h-80 rounded-3xl overflow-hidden"
                />
                <p className="text-left font-montserrat font-extrabold text-2xl">
                  {blog.title}
                </p>
                <p className="font-lato text-lg">{blog.desc}</p>
                <Link href={`/blog/${index + 1}`}>
                  <div className="flex items-center space-x-1 font-montserrat font-bold cursor-pointer">
                    <span>Read more</span>
                    <FiArrowRight />
                  </div>
                </Link>
              </div>
              {index !== blogs.length - 1 && (
                <div className="border-t mt-8" />
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}