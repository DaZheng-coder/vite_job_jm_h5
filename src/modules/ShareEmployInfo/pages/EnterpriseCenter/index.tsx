import { FC } from "react";
import LoginIcon from "@assets/se_login_icon.png";
import MenuCard from "@/components/MenuCard";
import EShareEmployIcon from "@assets/se_share_employ.png";
import { useNavigate } from "react-router-dom";
import "./index.less";

const EnterpriseCenterDetail: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="enterprise_center h-full">
      <div className="h-[478px] flex items-center">
        <div className="text-[32px] font-bold pl-[56px] pr-[44px]">
          <div>您好，</div>
          <div
            className="text-[#ffa01c] mt-[20px] underline"
            onClick={() => navigate("/shareEmployInfo/login")}
          >
            请先登录账号
          </div>
        </div>
        <img className="w-[442px] h-[368px]" src={LoginIcon} />
      </div>
      <div className="px-[28px]">
        <MenuCard
          icon={EShareEmployIcon}
          title="共享用工信息"
          subTitle={
            <span className="text-[#999] text-[28px]">
              当前信息<span className="text-[30px] text-[#000]">1</span>条
            </span>
          }
          onClick={() => navigate("/shareEmployInfo/myEmployInfo")}
        />
      </div>
    </div>
  );
};

export default EnterpriseCenterDetail;
