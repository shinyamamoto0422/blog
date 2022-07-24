import { NextPageWithLayout } from "@/types/next-type";
import { Profile } from "@/components/page/profile";
import { MainLayout } from "@/components/layout";

const ProfilePage: NextPageWithLayout = () => {
  return <Profile />;
};

ProfilePage.getLayout = MainLayout;

export default ProfilePage;
