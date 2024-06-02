import { NavBar } from "antd-mobile";
import { FC } from "react";

export interface IHeader {
  title: string;
}

const Header: FC<IHeader> = ({ title }) => {
  const back = () => history.back();

  return (
    <NavBar onBack={back} className="fixed top-0 left-0 w-full bg-white z-[999]">
      {title}
    </NavBar>
  );
};

export default Header;
