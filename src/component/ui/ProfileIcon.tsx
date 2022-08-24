import Image from "next/image";
import { FC } from "react";

export const ProfileIcon: FC = () => {
  return (
    <Image src={"/shinyamamoto.jpeg"} alt={"/shinyamamoto.jpeg"} width={44} height={44} className="rounded-full" />
  );
};
