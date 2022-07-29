import { AppPropsWithLayout } from "@/type/next-type";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const Layout = Component.getLayout ?? ((page) => page);

  return Layout(<Component {...pageProps} />);
};

export default App;
