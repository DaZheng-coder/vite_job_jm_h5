import { FC } from "react";
import MCard from "../MCard";
import ManAvatar from "@assets/js_man.png";
import NameIcon from "@assets/js_my_name.png";
import IdCardIcon from "@assets/js_my_id_card.png";
import PhoneIcon from "@assets/js_my_phone.png";

const JSUserCard: FC = () => {
  return (
    <MCard title="提交信息" blue>
      <div className="flex justify-between pb-[28px] pt-[28px]">
        <div className="flex-1">
          <div className="flex items-center pb-[28px]">
            <img className="w-[32px] h-[32px]" src={NameIcon} alt="" />
            <span className="text-[32px] font-medium pl-[28px]">姓名</span>
          </div>
          <div className="flex items-center pb-[28px] text-[28px]">
            <img className="w-[32px] h-[32px]" src={IdCardIcon} alt="" />
            <span className="pl-[28px]">男</span>
            <span className="pl-[28px]">47岁</span>
          </div>
          <div className="text-[28px]">
            <img className="w-[32px] h-[32px]" src={PhoneIcon} alt="" />
            <span className="pl-[28px]">1546786465</span>
          </div>
        </div>
        <img className="w-[128px] h-[128px]" src={ManAvatar} alt="" />
      </div>
    </MCard>
  );
};

export default JSUserCard;
