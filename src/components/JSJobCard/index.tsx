import { FC } from "react";

const JSJobCard: FC = () => {
  return (
    <div className="bg-white rounded-[20px] p-[28px] my-[28px] shadow-custom-shadow">
      <div className="text-[30px] flex justify-between">
        <span>职位名称</span>
        <span className="text-[#2a57c9]">工钱</span>
      </div>
      <div className="py-[28px] text-[26px] text-[#999]">
        <span>地址</span>
      </div>
      <div className="flex text-[24px] text-[#999] pb-[28px]">
        <div className="mr-[28px] p-[6px] min-w-[120px] text-center bg-[#00c28833]">
          个人
        </div>
      </div>
      <div className="text-[24px] text-[#999] pt-[28px] flex justify-between border-t-[2px] border-solid border-[#f1f2f6] border-l-0 border-r-0 border-b-0">
        <span>地址</span>
        <span>更新日期</span>
      </div>
    </div>
  );
};

export default JSJobCard;
