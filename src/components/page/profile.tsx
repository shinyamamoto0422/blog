import { FC } from "react";

type Props = {
  data: any;
};

export const Profile: FC<Props> = ({ data }) => {
  console.log(data, "読み込まれました");

  return (
    <div>
      <main>
        <h1 className="text-xl font-bold text-red-400 ">Profile!!</h1>
      </main>
    </div>
  );
};
