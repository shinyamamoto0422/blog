import { NextPageWithLayout } from "@/types/next-type";
import { client } from "@/libs/microCMS/client";
import { Home } from "@/components/page";

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });
  return {
    props: {
      data,
    },
  };
};

const HomePage: NextPageWithLayout = ({ data }: any) => {
  return <Home data={data} />;
};

export default HomePage;
