import Header from "@/components/Header";
import { FC } from "react";
import IWantJob from "@assets/js_i_want_job.png";
import IWantWorker from "@assets/js_i_want_worker.png";
import Selected from "@assets/js_selected.png";

const ChooseIdentity: FC = () => {
  return (
    <div className="pt-[96px] px-[28px] bg-[#f7f8fc] h-full">
      <Header title="选择类型" />
      <div className="pt-[56px] px-[28px]">
        <div className="text-[36px] font-medium pb-[14px]">请选择你的身份</div>
        <div className="pb-[96px] text-[28px]">便于我们为您提供最佳服务</div>
      </div>
      <div className="rounded-[20px] borer-[4px] border-solid border-[#2a57c9] py-[16px] px-[28px] bg-[#e3f3ff] flex justify-between items-center">
        <img className="w-[152px] h-[168px]" src={IWantJob} alt="" />
        <div className="flex items-center">
          <span className="pr-[28px] text-[30px] font-medium">我要求职</span>
          {true ? (
            <img className="w-[32px] h-[32px]" src={Selected} alt="" />
          ) : (
            <div className="border-[2px] border-solid border-[#999] rounded-[50%] w-[32px] h-[32px]"></div>
          )}
        </div>
      </div>
      <div className="rounded-[20px] my-[56px] borer-[4px] border-solid border-[transparent] py-[16px] px-[28px] bg-[#e3f3ff] flex justify-between items-center">
        <img className="w-[152px] h-[168px]" src={IWantWorker} alt="" />
        <div className="flex items-center">
          <span className="pr-[28px] text-[30px] font-medium">我要招工</span>
          {false ? (
            <img className="w-[32px] h-[32px]" src={Selected} alt="" />
          ) : (
            <div className="border-[2px] border-solid border-[#999] rounded-[50%] w-[32px] h-[32px]"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChooseIdentity;
