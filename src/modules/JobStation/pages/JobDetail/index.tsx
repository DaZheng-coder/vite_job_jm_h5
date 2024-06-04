import Header from "@/components/Header";
import JSJobCard from "@/components/JSJobCard";
import MCard from "@/components/MCard";
import StationCard from "@/components/StationCard";
import { ProgressCircle } from "antd-mobile";
import { FC } from "react";
import "./index.less";
import JSActionBar from "@/components/JSActionBar";

const JobDetail: FC = () => {
  return (
    <div className="pt-[96px] bg-[#f7f8fc] h-full overflow-scroll">
      <Header title="工作详情" />
      <div className="px-[28px]">
        <JSJobCard />
        <StationCard />
        <MCard title="联系方式" blue>
          <div className="flex justify-between items-center pb-[28px]">
            <div>
              <div>
                <span className="text-[28px] text-[#999] pr-[56px]">
                  总招工
                </span>
                <span>5人</span>
              </div>
              <div className="pt-[28px]">
                <span className="text-[28px] text-[#999] pr-[56px]">
                  已招工
                </span>
                <span>2人</span>
              </div>
            </div>
            <ProgressCircle className="js_Progress_circle" percent={50}>
              50%
            </ProgressCircle>
          </div>
        </MCard>
        <MCard title="工作信息" blue>
          <div className="text-[28px] flex">
            <div className="pr-[28px] text-[#999] whitespace-nowrap">
              工作类型
            </div>
            <div>
              防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
            </div>
          </div>
          <div className="text-[28px] flex pt-[28px]">
            <div className="pr-[28px] text-[#999] whitespace-nowrap">
              招工日期
            </div>
            <div>
              防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
            </div>
          </div>
          <div className="text-[28px] flex pt-[28px]">
            <div className="pr-[28px] text-[#999] whitespace-nowrap">
              工作内容
            </div>
            <div>
              防静电撒李逵负荆啊打了卡生发剂12343214fdsaf放大发生的范德萨啊
            </div>
          </div>
        </MCard>
      </div>
      <JSActionBar nextText="立刻报名" cancelText="收藏" />
    </div>
  );
};

export default JobDetail;
