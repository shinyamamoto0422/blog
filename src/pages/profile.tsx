import { NextPageWithLayout } from "@/types/next-type";
import { client } from "@/libs/microCMS/client";
import { Profile } from "@/components/page/profile";

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

export default ProfilePage;
