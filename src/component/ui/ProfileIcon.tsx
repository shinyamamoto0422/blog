import Image from "next/image";
import { FC } from "react";
import { godIcon } from "@/constant/src";

export const ProfileIcon: FC = () => {
  return <Image src={godIcon} alt={godIcon} width={44} height={44} className="rounded-full" />;
};
