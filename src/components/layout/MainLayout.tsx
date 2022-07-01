import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  const items = [
    { link: "/", label: "Home" },
    { link: "/about", label: "About" },
  ];

  return (
    <>
      <Header links={items} />
      {children}
      <Footer />
    </>
  );
};
