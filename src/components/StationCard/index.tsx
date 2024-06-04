import { FC } from "react";
import StationImg from "@assets/js_station_avatar.png";
import SvgIcon from "../SvgIcon";

const StationCard: FC = () => {
  return (
    <div className="bg-white rounded-[20px] p-[28px] flex items-center">
      <img
        className="w-[132px] h-[152px] "
        src={StationImg}
        alt=""
      />
      <div className="flex-1 flex justify-center flex-col pl-[12px]">
        <div className="text-[28px]">驿站名</div>
        <div className="text-[26px] text-[#999] pt-[16px]">驿站位置</div>
        <div className="text-[26px] text-[#999] pt-[16px]">17652467847</div>
      </div>
      <div className="pl-[40px] flex items-center">
        <SvgIcon className="w-54px h-[54px]" name="js_view_detail" />
      </div>
    </div>
  );
};

export default StationCard;
