import StationImg from "@assets/js_station_avatar.png";
import CollectionIcon from "@assets/js_collection.png";
import NavIcon from "@assets/js_detail_nav.png";
import PhoneIcon from "@assets/js_detail.png";

const JSStationPosCard = () => {
  return (
    <div className="p-[28px] bg-white rounded-[18px] shadow-custom-shadow">
      <div className="flex pb-[28px]">
        <img className="w-[132px] h-[152px]" src={StationImg} alt="" />
        <div className="pl-[28px] flex-1  flex flex-col justify-between">
          <div className="text-[36px] font-medium">东宝区222342314</div>
          <div className="flex justify-end">
            <img className="w-[40px] h-[40px]" src={CollectionIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="border-t-[2px] border-[#e5e5e5] border-solid border-l-0 border-r-0 border-b-0">
        <div className="pt-[28px] flex justify-between">
          <span className="text-[28px]">荆门市ssssssss</span>
          <div className="text-[#2a57c9] w-[128px] h-[50px] border-[2px] flex justify-center items-center border-solid border-[#2a57c9] rounded-[100px]">
            <img className="w-[30px] h-[30px]" src={NavIcon} alt="" />
            <span className="pl-[5px]">导航</span>
          </div>
        </div>
        <div className="pt-[28px] flex justify-between">
          <span className="text-[28px]">123412343214213</span>
          <div className="text-[#2a57c9] w-[128px] h-[50px] border-[2px] flex justify-center items-center border-solid border-[#2a57c9] rounded-[100px]">
            <img className="w-[30px] h-[30px]" src={PhoneIcon} alt="" />
            <span className="pl-[5px]">拨号</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSStationPosCard;
