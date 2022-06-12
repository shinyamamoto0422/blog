import { Home } from "@/components/page";
import { client } from "@/libs/microCMS/client";
import { NextPageWithLayout } from "@/types/next-type";

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
