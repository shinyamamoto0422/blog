import { FC } from "react";
import { Loader } from "@mantine/core";

export const AppLoading: FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-[-webkit-fill-available]">
      <Loader variant="dots" />
    </div>
  );
};
