import Image from "next/image";
import { FC } from "react";
import { godIcon } from "@/constants/src";

export const ProfileIcon: FC = () => {
  return (
    <Image
      src={godIcon}
      alt={godIcon}
      width={45}
      height={45}
      className="rounded-full"
    />
  );
};
