import { MainLayout } from "@/components/layout";
import { Home } from "@/components/page";
import { client } from "@/libs/microCMS/client";
import type { NextPage } from "next";

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

const HomePage: NextPage = ({ data }: any) => {
  return (
    <MainLayout>
      <Home data={data} />
    </MainLayout>
  );
};

export default HomePage;
