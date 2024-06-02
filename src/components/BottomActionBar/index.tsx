import { Button } from "antd-mobile";
import { FC } from "react";

export interface IBottomActionBar {
  className?: string;
  onNext?: () => void;
  nextText?: string;
}

const BottomActionBar: FC<IBottomActionBar> = ({
  className,
  onNext,
  nextText,
}) => {
  return (
    <div
      className={`flex justify-center fixed w-full bottom-0 left-0 min-h-[192px] bg-white shadow-custom-bottom-bar-shadow py-[28px] ${className}`}
    >
      <Button
        className="!h-[88px] w-[638px] hover:border-[#FFA01C]"
        shape="rounded"
        color="primary"
        onClick={onNext}
      >
        {nextText || "提交"}
      </Button>
    </div>
  );
};

export default BottomActionBar;
