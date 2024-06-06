import Header from "@/components/Header";
import StationCard from "@/components/StationCard";
import { Dropdown, SearchBar } from "antd-mobile";
import { FC } from "react";

const StationList: FC = () => {
  return (
    <div className="pt-[90px] h-full overflow-scroll bg-[#f7f8fc]">
      <Header title="驿站列表" />
      <div className="flex items-center p-[28px] bg-white">
        <Dropdown>
          <Dropdown.Item key="1" title="1234">
            1234
          </Dropdown.Item>
        </Dropdown>
        <SearchBar className="flex-1" placeholder="请搜索" />
      </div>
      <div className="pt-[28px]">
        <StationCard />
      </div>
    </div>
  );
};

export default StationList;
