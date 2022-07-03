import { NextPageWithLayout } from "@/types/next-type";
import { client } from "@/libs/microCMS/client";
import { Profile } from "@/components/page/profile";
import { MainLayout } from "@/components/layout";

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

const ProfilePage: NextPageWithLayout = ({ data }: any) => {
  return <Profile data={data} />;
};

ProfilePage.getLayout = MainLayout;

export default ProfilePage;
