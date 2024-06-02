import { FC } from "react";
import SvgIcon from "../SvgIcon";
import { useNavigate } from "react-router-dom";

const EmployCardItem: FC<{
  // username: string;
  // jobTitle: string;
  // educationBg: string;
  // major: string;
  // updateTime: string;
  // position: string;
}> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("*** 1324")
    navigate("/shareEmployInfo/employInfoDetail");
  };

  return (
    <div
      className="p-[28px] bg-white rounded-[20px] shadow-custom-shadow"
      onClick={handleClick}
    >
      <div className="flex justify-between text-[32px] font-bold">
        <span>赵小嗨</span>
        <span className="text-[#ffa01c]">操作工</span>
      </div>
      <div className="flex text-[26px] py-[28px] border-solid border-l-0 border-r-0 border-t-0 border-b-[2px] border-[#eee]">
        <div>
          <SvgIcon className="w-[32px] h-[32px]" name="se_education_bg" />
          <span className="pl-[12px]">大学本科</span>
        </div>
        <div className="pl-[72px]">
          <SvgIcon className="w-[32px] h-[32px]" name="se_job" />
          <span className="pl-[12px]">技术员测试</span>
        </div>
      </div>
      <div className="flex text-[#999] text-[24px] justify-between pt-[28px]">
        <span>更新时间：132432143214</span>
        <span className="w-[212px] truncate	">fdasfsdafasdf</span>
      </div>
    </div>
  );
};

export default EmployCardItem;
