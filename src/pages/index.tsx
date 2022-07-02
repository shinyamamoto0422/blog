import { client } from "@/libs/microCMS/client";
import { Home } from "@/components/page";
import { Blogs } from "@/types/blog";
import { NextPageWithLayout } from "@/types/next-type";
import { MainLayout } from "@/components/layout";

export type Props = {
  blogs: Blogs;
};

export const getStaticProps = async () => {
  const blogs = await client.get({
    endpoint: "blogs",
  });
  return {
    props: {
      blogs,
    },
  };
};

const HomePage: NextPageWithLayout<Props> = ({ blogs }) => {
  return <Home blogs={blogs} />;
};

HomePage.getLayout = MainLayout;

export default HomePage;
