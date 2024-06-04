import Header from "@/components/Header";
import JSActionBar from "@/components/JSActionBar";
import JSWorkerCard from "@/components/JSWorkerCard";
import MCard from "@/components/MCard";
import StationCard from "@/components/StationCard";
import { FC } from "react";

const WorkerDetail: FC = () => {
  return (
    <div className="pt-[96px] bg-[#f7f8fc] h-full overflow-scroll px-[28px] pb-[196px]">
      <Header title="零工详情" />
      <JSWorkerCard />
      <MCard title="求职信息" className="pb-[28px]">
        <div className="text-[28px] flex">
          <div className="pr-[28px] text-[#999] whitespace-nowrap">
            工作类型
          </div>
          <div>
            防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
          </div>
        </div>
        <div className="text-[28px] flex pt-[28px]">
          <div className="pr-[28px] text-[#999] whitespace-nowrap">联系人</div>
          <div>
            防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
          </div>
        </div>
        <div className="text-[28px] flex pt-[28px]">
          <div className="pr-[28px] text-[#999] whitespace-nowrap">
            联系方式
          </div>
          <div>
            防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
          </div>
        </div>
        <div className="text-[28px] flex pt-[28px]">
          <div className="pr-[28px] text-[#999] whitespace-nowrap">
            服务描述
          </div>
          <div>
            防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
          </div>
        </div>
        <div className="text-[28px] flex pt-[28px]">
          <div className="pr-[28px] text-[#999] whitespace-nowrap">联系人</div>
          <div>
            防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
          </div>
        </div>
      </MCard>
      <StationCard />
      <JSActionBar nextText="立即邀请" cancelText="收藏" />
    </div>
  );
};

export default WorkerDetail;
