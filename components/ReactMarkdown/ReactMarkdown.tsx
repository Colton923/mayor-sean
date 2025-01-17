const ReactMarkdown = ({ Markdown }: { Markdown: string }) => {
  return (
    <div
      className="prose lg:prose-xl"
      dangerouslySetInnerHTML={{
        __html: Markdown,
      }}
    />
  );
};

export default ReactMarkdown;
