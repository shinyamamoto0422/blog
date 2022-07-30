import { Layout } from "@/component/layout";
import { Home } from "@/component/page/Home";
import { NextPageWithLayout } from "@/type/next-type";

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = Layout;

export default HomePage;
