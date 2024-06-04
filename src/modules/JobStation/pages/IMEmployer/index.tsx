import JSGuide from "@/components/JSGuide";
import { Tabs } from "antd-mobile";
import { FC } from "react";
import JSWorkerCard from "@/components/JSWorkerCard";

const IMEmployer: FC = () => {
  return (
    <div>
      <JSGuide key="employer" />
      <div className="px-[28px]">
        <div className="flex text-[26px] items-end">
          <div className="mr-[28px] text-[28px] font-bold">推荐</div>
          <div className="mr-[28px] text-[#999]">最新</div>
          <div className="mr-[28px] text-[#999]">附近</div>
        </div>
        <JSWorkerCard />
      </div>
    </div>
  );
};

export default IMEmployer;
