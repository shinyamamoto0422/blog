import { FC, ReactNode } from "react";
import { Footer } from "./Footer";

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};
