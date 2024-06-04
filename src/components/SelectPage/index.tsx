import { FC, useState } from "react";
import "./index.less";
import { NavBar } from "antd-mobile";
import JSActionBar from "../JSActionBar";

interface IList {
  key: string | number;
  title: string;
  list?: IList[];
}

const SelectPage: FC<{
  back: () => void;
  title: string;
  list: IList[];
}> = ({ back, title, list }) => {
  const [actKey, setActKey] = useState<string | number>(list[0]?.key);

  return (
    <div className="pb-[28px] h-full">
      <NavBar onBack={back} className="bg-white">
        {title}
      </NavBar>
      <div className="flex h-full">
        <div className="w-[192px] border-r-[2px] border-t-0 border-b-0 border-l-0 border-solid border-[#eee]">
          {list.map((item) => (
            <div
              key={item.key}
              className="flex items-center pt-[28px]"
              onClick={() => setActKey(item.key)}
            >
              <div
                className={`${
                  actKey === item.key ? "" : "opacity-0"
                } w-[8px] h-[30px] bg-[#0561b7] rounded-[100px]`}
              ></div>
              <div
                className={`${
                  actKey === item.key ? "text-[28px] font-medium" : "font-26px"
                } pl-[20px]`}
              >
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <div className="p-[28px]">
          {list[list.findIndex((l) => l.key === actKey)]?.list?.map((item) => {
            return (
              <div key={item.key}>
                <div className="text-[30px] font-medium">{item.title}</div>
                <div className="">
                  {item.list?.map((i) => (
                    <div
                      key={i.key}
                      className="text-[24px] pt-[16px] p-[18px] w-[220px] bg-[#f5f5f5] rounded-[8px] text-center my-[28px] mr-[28px]"
                    >
                      {i.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <JSActionBar />
    </div>
  );
};

export default SelectPage;
