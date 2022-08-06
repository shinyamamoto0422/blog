import { FC, useEffect } from "react";
import hljs from "highlight.js";
import { Props } from "@/pages/blogs/[slug]";
import "highlight.js/styles/atom-one-dark.css";

export const BlogId: FC<Props> = ({ blog }) => {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);
  return (
    <article className="px-8 mx-auto max-w-none prose md:prose-base lg:max-w-12% lg:prose">
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};
