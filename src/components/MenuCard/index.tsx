import React, { FC, ReactNode } from "react";

const MenuCard: FC<{
  icon: ReactNode;
  title: ReactNode;
  subTitle: ReactNode;
  onClick?: () => void;
}> = ({ icon, title, subTitle, onClick }) => {
  return (
    <div
      className="flex p-[28px] bg-white rounded-[20px] shadow-custom-shadow"
      onClick={onClick}
    >
      <img className="w-[164px] h-[164px]" src={icon as any} alt="" />
      <div className="flex-1 ml-[20px] flex flex-col justify-center">
        <div className="text-[32px] font-medium leading-[38px]">{title}</div>
        <div className="text-[26px] text-[#666] pt-[28px]">{subTitle}</div>
      </div>
    </div>
  );
};

export default MenuCard;
