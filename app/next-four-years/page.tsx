import Image from "next/image";
import img from "@/public/assets/logo-no-bg-512x512.webp";
import { client } from "@/sanity/client";
import { marked } from "marked";

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

const transformMarkdown = async (markdown: string) => {
  const html = await marked(markdown);

  return html
    .replace(
      /<p>/g,
      `<p style="font-size: 1.125rem; line-height: 1.75rem; color: #374151; margin-bottom: 1rem;">`
    )
    .replace(
      /<h1>/g,
      `<h1 style="font-size: 2.25rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">`
    )
    .replace(
      /<h2>/g,
      `<h2 style="font-size: 2rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">`
    )
    .replace(
      /<h3>/g,
      `<h3 style="font-size: 1.75rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">`
    )
    .replace(
      /<h4>/g,
      `<h4 style="font-size: 1.5rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">`
    )
    .replace(
      /<h5>/g,
      `<h5 style="font-size: 1.25rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">`
    )
    .replace(
      /<h6>/g,
      `<h6 style="font-size: 1rem; font-weight: bold; color: #1f2937; margin-bottom: 1rem;">`
    )
    .replace(
      /<ul>/g,
      `<ul style="list-style-type: disc; margin-left: 1.25rem; color: #374151;">`
    )
    .replace(
      /<ol>/g,
      `<ol style="list-style-type: decimal; margin-left: 1.25rem; color: #374151;">`
    )
    .replace(/<li>/g, `<li style="color: #374151; margin-bottom: 0.5rem;">`)
    .replace(/<a>/g, `<a style="color: #3b82f6; text-decoration: underline;">`)
    .replace(/<strong>/g, `<strong style="font-weight: bold;">`);
};

export default async function TheNextFourYearsPage() {
  const data = await client.fetch(query);
  const md = data?.[0]?.markdown || "";

  if (!md) return <Skeleton />;
  const markdown = await transformMarkdown(data[0].markdown);

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
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></p>
      </div>
    </div>
  );
}
