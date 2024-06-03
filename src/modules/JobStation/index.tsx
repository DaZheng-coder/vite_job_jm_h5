import Header from "@/components/Header";
import JSGuide from "@/components/JSGuide";
import { FC } from "react";

const JobStation: FC = () => {
  return (
    <div className="pt-[96px] bg-[#f7f8fc] h-full overflow-scroll">
      <Header title="零工驿站" />
      <JSGuide />
    </div>
  );
};

export default JobStation;
