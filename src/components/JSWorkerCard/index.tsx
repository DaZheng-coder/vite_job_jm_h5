import { FC } from "react";
import ManAvatar from "@assets/js_man.png";
import WomanAvatar from "@assets/js_woman/png";

const JSWorkerCard: FC = () => {
  return (
    <div className="bg-white rounded-[20px] p-[28px] my-[28px] shadow-custom-shadow">
      <div className="flex items-center">
        <img
          className="w-[128px] h-[128px] border-dashed border-[4px] border-[#999]"
          src={ManAvatar}
          alt=""
        />
        <div className="pl-[38px] flex-1">
          <div className="text-[30px] flex justify-between">
            <span>职位名称</span>
            <span className="text-[#2a57c9]">工钱</span>
          </div>
          <div className="text-[26px] pt-[16px] text-[#2a57c9]">职位</div>
          <div className="py-[16px] text-[26px] text-[#999]">
            <span>地址</span>
          </div>
          <div className="text-[26px] pb-[16px] flex text-[#999] ">
            <div className="pr-[16px]">个人</div>
            <div className="w-[2px] h-[40px] bg-[#eee]"></div>
            <div className="px-[16px]">女</div>
            <div className="w-[2px] h-[40px] bg-[#eee]"></div>
            <div className="px-[16px]">47岁</div>
            <div className="w-[2px] h-[40px] bg-[#eee]"></div>
            <div className="px-[16px]">月结</div>
          </div>
        </div>
      </div>
      <div className="text-[24px] text-[#999] pt-[28px] flex justify-between border-t-[2px] border-solid border-[#f1f2f6] border-l-0 border-r-0 border-b-0">
        <span>地址</span>
        <span>更新日期</span>
      </div>
    </div>
  );
};

export default JSWorkerCard;
