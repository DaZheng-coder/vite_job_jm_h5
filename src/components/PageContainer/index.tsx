import { NavBar } from "antd-mobile";
import { FC, ReactNode } from "react";
import Header, { IHeader } from "../Header";

interface IPageContainer extends IHeader {
  children?: ReactNode;
}

const PageContainer: FC<IPageContainer> = ({ title, children }) => {
  return (
    <div className="pt-[96px]">
      <Header title={title} />
      {children}
    </div>
  );
};

export default PageContainer;
