import { NavBar } from "antd-mobile";
import { FC, ReactNode } from "react";
import Header, { IHeader } from "../Header";
import BottomActionBar, { IBottomActionBar } from "../BottomActionBar";

interface IPageContainer extends IHeader {
  children?: ReactNode;
  className?: string;
  bottomBarProps?: IBottomActionBar;
}

const PageContainer: FC<IPageContainer> = ({
  title,
  children,
  className = "",
  bottomBarProps,
}) => {
  return (
    <div
      className={`pt-[96px] overflow-scroll h-full  ${className} ${
        bottomBarProps ? "pb-[192px]" : ""
      }`}
    >
      <Header title={title} />
      <div className="h-full overflow-scroll">{children}</div>
      {!!bottomBarProps && <BottomActionBar {...(bottomBarProps || {})} />}
    </div>
  );
};

export default PageContainer;
