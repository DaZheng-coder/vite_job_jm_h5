import Header from "@/components/Header";
import { FC } from "react";
import AvatarIcon from "@assets/js_avatar.png";
import MyPublished from "@assets/js_my_published.png";
import ReportHistory from "@assets/js_report_history.png";
import WorkRecord from "@assets/js_work_record.png";
import Comment from "@assets/js_comment.png";
import PersonalData from "@assets/js_personal_data.png";
import RealName from "@assets/js_real_name.png";
import MyCollection from "@assets/js_my_collection.png";
import Settings from "@assets/js_setting.png";
import "./index.less";
import { RightOutline } from "antd-mobile-icons";

const UserCenter: FC = () => {
  return (
    <div className="pt-[96px] h-full bg-[#f7f8fc] overflow-scroll">
      <Header title="个人中心" />
      <div className="h-[414px] bg-[#4259e5] mb-[-414px]"></div>
      <div className="flex h-[332px] items-center px-[28px]">
        <img className="w-[128px] h-[128px]" src={AvatarIcon} alt="" />
        <div className="pl-[28px] text-white text-[30px]">
          <div className="font-medium pb-[28px]">请先登陆/注册</div>
          <div className="text-[#2a57c9] text-[26px] flex justify-center items-center bg-white w-[128px] h-[52px] rounded-[100px]">
            未认证
          </div>
        </div>
      </div>
      <div className="px-[28px]">
        <div className="bg-white rounded-[20px] shadow-custom-shadow">
          <div className="js_usual_option py-[21px] text-[30px] font-medium px-[28px]">
            常用功能
          </div>
          <div className="flex justify-between px-[28px] pb-[28px]">
            <div className="flex flex-col items-center">
              <img
                className="w-[112px] h-[112px] translate-x-[5px]"
                src={MyPublished}
                alt=""
              />
              <span className="text-[28px]">我的发布</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-[112px] h-[112px] translate-x-[5px]"
                src={ReportHistory}
                alt=""
              />
              <span className="text-[28px]">报名记录</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-[112px] h-[112px] translate-x-[5px]"
                src={WorkRecord}
                alt=""
              />
              <span className="text-[28px]">用工记录</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                className="w-[112px] h-[112px] translate-x-[5px]"
                src={Comment}
                alt=""
              />
              <span className="text-[28px]">评价中心</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[20px] shadow-custom-shadow my-[28px]">
          <div className="p-[28px] flex items-center justify-between">
            <img className="w-[50px] h-[50px]" src={PersonalData} alt="" />
            <span className="pl-[28px] text-[30px] flex-1">个人资料</span>
            <RightOutline />
          </div>
          <div className="p-[28px] flex items-center justify-between">
            <img className="w-[50px] h-[50px]" src={RealName} alt="" />
            <span className="pl-[28px] text-[30px] flex-1">实名认证</span>
            <RightOutline />
          </div>
          <div className="p-[28px] flex items-center justify-between">
            <img className="w-[50px] h-[50px]" src={MyCollection} alt="" />
            <span className="pl-[28px] text-[30px] flex-1">我的收藏</span>
            <RightOutline />
          </div>
          <div className="p-[28px] flex items-center justify-between">
            <img className="w-[50px] h-[50px]" src={Settings} alt="" />
            <span className="pl-[28px] text-[30px] flex-1">设置</span>
            <RightOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCenter;
