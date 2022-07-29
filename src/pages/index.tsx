import { Layout } from "@/component/layout";
import { Home } from "@/component/page";
import { NextPageWithLayout } from "@/type/next-type";

const ProfilePage: NextPageWithLayout = () => {
  return <Home />;
};

ProfilePage.getLayout = Layout;

export default ProfilePage;
