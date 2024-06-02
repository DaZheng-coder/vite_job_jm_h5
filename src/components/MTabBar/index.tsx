import { FC, ReactNode, useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";
import { useLocation } from "react-router-dom";

export interface IMTabBarItem {
  key: string;
  title: string;
  icon: string;
}

const MTabBar: FC<{
  tabs: IMTabBarItem[];
  onChange?: (key: string) => void;
}> = ({ tabs, onChange }) => {
  const [activeKey, setActiveKey] = useState<string>();
  const location = useLocation();

  useEffect(() => {
    const paths = location.pathname.split("/");
    const keys = tabs.map((t) => t.key);
    const key = paths.find((path) => keys.includes(path)) || tabs[0].key;
    setActiveKey(key);
    onChange?.(key);
  }, [location.pathname]);

  const handleChangeTab = (key: string) => {
    setActiveKey(key);
    onChange?.(key);
  };

  return (
    <div className="w-full px-[28px] pb-[76px] pt-[28px] bg-transparent fixed bottom-0 left-0 bg-white">
      <div className="flex justify-around p-[24px] rounded-[66px] bg-white border-2px border-solid border-[#eee]">
        {tabs.map(({ key, title, icon }) => (
          <div
            className={`flex flex-col items-center ${
              activeKey === key ? "text-[#ffa01c]" : ""
            }`}
            key={key}
            onClick={() => handleChangeTab(key)}
          >
            <SvgIcon name={icon} className="w-[50px] h-[50px]" />
            <div>{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MTabBar;
