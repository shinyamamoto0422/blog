import { FC } from "react";
import { Props } from "@/pages/blogs/[slug]";

export const BlogId: FC<Props> = ({ blog }) => {
  return (
    <article className="px-8 mx-auto max-w-none prose md:prose-base lg:max-w-12% lg:prose">
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  );
};
