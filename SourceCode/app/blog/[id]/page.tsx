// app/blog/[id]/page.tsx
import { Section } from "@/components/layout/Section";
import { blogs } from "@/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((_, i) => ({ id: String(i + 1) }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const blog = blogs[parseInt(params.id) - 1];
  if (!blog) return {};
  return {
    title: `${blog.title} - Engame`,
    icons: [{ rel: "icon", url: "/favicon.ico" }],
  };
}

export default function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blogs[parseInt(params.id) - 1];
  if (!blog) notFound();

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/images/EG---bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
        className="relative"
      >
        <Section zIndex="z-10" bgColor="bg-transparent">
          <div className="flex justify-center py-10">
            <p className="text-center md:text-left font-montserrat font-extrabold text-4xl">
              {blog.title}
            </p>
          </div>
        </Section>
      </div>

      <img
        src={blog.image_lg || blog.image}
        style={{ width: "100%", height: "auto" }}
        alt={blog.title}
      />

      <Section>
        <div className="flex flex-col space-y-8 py-10">
          <div className="flex items-center space-x-4">
            <div
              style={{
                backgroundImage: "url('/assets/images/icon.png')",
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
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </Section>
    </>
  );
}