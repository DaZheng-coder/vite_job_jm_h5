import { FC, ReactNode } from "react";

const MCard: FC<{
  title?: string;
  children?: ReactNode;
  className?: string;
  blue?: boolean;
}> = ({ title, children, className = "", blue = false }) => {
  return (
    <div
      className={`bg-white rounded-[20px] shadow-custom-shadow p-[28px] pb-0 mb-[28px] my-[28px] ${className}`}
    >
      {!!title && (
        <div className="relative text-[30px] font-medium inline-block">
          <div
            className={`absolute right-0 bottom-0 w-full h-[16px] ${
              blue ? "bg-gradient-linear-custom" : "bg-gradient-linear"
            } z-0`}
          ></div>
          <div className="relative z-10">{title}</div>
        </div>
      )}
      <div className="pt-[20px]">{children}</div>
    </div>
  );
};

export default MCard;
