import "../styles/globals.css";
import Head from "next/head";
import { FC, useState } from "react";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { AppPropsWithLayout } from "@/types/next-type";
import { MainLayout } from "@/components/layout";

const App: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const Layout = Component.useLayout ? Component.useLayout : MainLayout;
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Head>
        <title>Code yy</title>
        <link rel="icon" type="image/png" sizes="16x16" href="/god.png" />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default App;
