import Header from "@/components/Header";
import JSWorkerCard from "@/components/JSWorkerCard";
import JSStationBG from "@assets/js_station_detail_bg.png";
import { FC } from "react";
import "./index.less";
import JSStationPosCard from "@/components/JSStationPosCard";
import { Tabs } from "antd-mobile";

const StationDetail: FC = () => {
  return (
    <div className="h-full overflow-scroll pt-[90px] bg-[#f7f8fc]">
      <Header title="驿站详情" />
      <div className="js_station_detail_bg z-[999] pt-[116px]  px-[28px]">
        <JSStationPosCard />
        <div className="bg-white rounded-[20px] shadow-custom-shadow my-[28px]">
          <Tabs className="js_station_detail_tabs">
            <Tabs.Tab title="求职信息" key="fruits">
              <JSWorkerCard />
            </Tabs.Tab>
            <Tabs.Tab title="招工信息" key="vegetables">
              西红柿
            </Tabs.Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default StationDetail;
