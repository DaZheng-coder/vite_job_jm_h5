import { SearchBar } from "antd-mobile";
import { RightOutline } from "antd-mobile-icons";
import { FC } from "react";
import { Swiper } from "antd-mobile";
import Swiper1 from "@assets/js_swiper_1.png";
import Swiper2 from "@assets/js_swiper_2.png";
import Swiper3 from "@assets/js_swiper_3.png";
import JSCreate from "@assets/js_create.png";
import JSPublished from "@assets/js_published.png";
import JSReportName from "@assets/js_report_name.png";
import JSUseWorker from "@assets/js_use_worker.png";
import JSStation from "@assets/js_station.png";

const JSGuide: FC<{ key: "employer" | "worker" }> = ({ key }) => {
  const gotoSearch = () => {
    console.log("*** gotoSeach");
  };

  return (
    <>
      <div className="bg-[#2a57c9] h-[282px] mb-[-162px] p-[28px] pb-0">
        <div className="flex items-center">
          <div className="text-[white] text-[28px] flex items-center pr-[22px]">
            <span className="pr-[4px]">请选择地区</span>
            <RightOutline />
          </div>
          <div className="flex-1" onClick={gotoSearch}>
            <SearchBar
              className="w-full rounded-[1998px] overflow-hidden pointer-events-none"
              placeholder="请输入工作/工种名称"
            />
          </div>
        </div>
        <div className="w-[694px] h-[300px]] pt-[28px]"></div>
      </div>

      <div className="px-[28px] rounded-[20px]">
        <Swiper className="js_swiper">
          {[Swiper1, Swiper2, Swiper3].map((src, index) => (
            <Swiper.Item key={index}>
              <img className="w-[694px] h-[300px]" src={src} />
            </Swiper.Item>
          ))}
        </Swiper>
        <div className="p-[28px] bg-white rounded-[20px] shadow-custom-js-card my-[28px]">
          <div className="text-[30px]">热门功能</div>
          <div className="flex pt-[28px]">
            {[
              {
                icon: JSCreate,
                title: "新建信息",
              },
              {
                icon: JSPublished,
                title: "我的发布",
              },
              {
                icon: key === "employer" ? JSUseWorker : JSReportName,
                title: key === "employer" ? "用工记录" : "我的报名",
              },
              {
                icon: JSStation,
                title: "附近驿站",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`w-[136px] flex flex-col items-center ${
                  index === 3 ? "mr-0" : "mr-[28px]"
                }`}
              >
                <img className="w-[136px] h-[136px]" src={item.icon} />
                <div className="text-[28px] text-center">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JSGuide;
