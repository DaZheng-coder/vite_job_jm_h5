import { Button } from "antd-mobile";
import { FC, ReactNode } from "react";

export interface IJSActionBar {
  className?: string;
  onNext?: () => void;
  nextText?: string;
  cancelText?: string;
  topExtra?: ReactNode;
}

const JSActionBar: FC<IJSActionBar> = ({
  className,
  onNext,
  nextText,
  cancelText,
}) => {
  return (
    <div
      className={`flex justify-center fixed w-full bottom-0 left-0 min-h-[192px] bg-white shadow-custom-js-shadow py-[28px] ${className}`}
    >
      {!!cancelText && (
        <Button
          className="!h-[88px] w-[166px] !bg-[transparent] !text-[#2A57C9] !border-[#2A57C9] hover:border-[#2A57C9] !ml-[28px]"
          color="primary"
          onClick={onNext}
        >
          {cancelText || "重置"}
        </Button>
      )}
      <Button
        className="!h-[88px] w-[638px] !bg-[#2A57C9] !border-[#2A57C9] hover:border-[#2A57C9] !mx-[28px]"
        color="primary"
        onClick={onNext}
      >
        {nextText || "确定"}
      </Button>
    </div>
  );
};

export default JSActionBar;
