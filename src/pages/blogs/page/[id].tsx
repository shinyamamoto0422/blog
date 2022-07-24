import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/libs/microCMS/client";
import { Home } from "@/components/page";
import { Blogs } from "@/types/blog";
import { NextPageWithLayout } from "@/types/next-type";
import { MainLayout } from "@/components/layout";

export type Props = {
  blogs: Blogs;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blogs" });

  const PER_PAGE = 5;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => start + i);
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/blogs/page/${repo}`;
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as { id: string };

  const data = await client.get({
    endpoint: "blogs",
    queries: { offset: (Number(id) - 1) * 8, limit: 8 },
  });

  return {
    props: {
      blogs: {
        contents: data.contents,
        totalCount: data.totalCount,
        limit: data.limit,
        offset: data.offset,
      },
    },
  };
};

const HomePage: NextPageWithLayout<Props> = ({ blogs }) => {
  return <Home blogs={blogs} />;
};

HomePage.getLayout = MainLayout;

export default HomePage;