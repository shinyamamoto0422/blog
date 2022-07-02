import "../styles/globals.css";
import { AppPropsWithLayout } from "@/types/next-type";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.getLayout ?? ((page) => page);

  return Layout(<Component {...pageProps} />);
};

export default App;
