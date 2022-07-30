import { FC, useState } from "react";
import { Pagination } from "@mantine/core";
import { useRouter } from "next/router";
import { Props } from "@/pages/blogs/page/[id]";
import { BlogCard } from "../feature/BlogCard";

export const BlogList: FC<Props> = ({ blogs }) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { contents, totalCount, limit } = blogs;

  // 投稿数 / 8 = ページ数(整数)
  const totalPages = Math.ceil(totalCount / limit);

  const handleChange = (pageId: number) => {
    setPage(pageId);
    router.push(`/blogs/page/${pageId}`);
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center px-3 mx-auto max-w-none min-h-[73vh] sm:px-8 lg:gap-12 xl:max-w-12%">
        {contents.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-7">
        <Pagination
          total={totalPages}
          page={Number(router.query.id) || page}
          onChange={handleChange}
          size="sm"
          radius="md"
          color="indigo"
        />
      </div>
    </>
  );
};
