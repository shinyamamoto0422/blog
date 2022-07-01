import "../styles/globals.css";
import Head from "next/head";
import { FC } from "react";
import { AppPropsWithLayout } from "@/types/next-type";
import { MainLayout } from "@/components/layout";

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const Layout = Component.useLayout ? Component.useLayout : MainLayout;

  return (
    <>
      <Head>
        <title>Code yy</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/god.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
