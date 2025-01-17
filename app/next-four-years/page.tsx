import Image from "next/image";
import img from "@/public/assets/logo-no-bg-512x512.webp";
import { client } from "@/sanity/client";
import { marked } from "marked";
import ReactMarkdown from "@/components/ReactMarkdown/ReactMarkdown";

const query = `*[_type == "markdownSchema" && title == "The Next Four Years"] {
  title,
  markdown
}`;

const Skeleton = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="relative h-screen w-full">
        <div className="animate-pulse bg-gray-300 w-full h-full"></div>
      </div>
    </div>
  );
};

export default async function TheNextFourYearsPage() {
  const data = await client.fetch(query);
  const md = data?.[0]?.markdown || "";
  const markdown = await marked(md);

  if (!md) return <Skeleton />;

  return (
    <div className="min-h-screen w-full">
      <Image
        src={img.src}
        alt="Sean"
        width={512}
        height={512}
        style={{
          justifySelf: "center",
          marginTop: "5em",
          marginBottom: "2em",
        }}
      />
      <div className="container mx-auto px-4 py-8 shadow-lg bg-white bg-opacity-90 max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          The Next Four Years
        </h1>
        <ReactMarkdown Markdown={markdown} />
      </div>
    </div>
  );
}
