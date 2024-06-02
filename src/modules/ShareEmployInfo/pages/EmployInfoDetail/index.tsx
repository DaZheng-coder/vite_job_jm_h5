import MCard from "@/components/MCard";
import PageContainer from "@/components/PageContainer";
import SvgIcon from "@/components/SvgIcon";
import { NoticeBar } from "antd-mobile";
import { CheckCircleFill } from "antd-mobile-icons";
import { FC } from "react";

const EmployInfoDetail: FC = () => {
  return (
    <PageContainer className="bg-[#f7F8FC]" title="共享用工">
      <NoticeBar
        className="m-[28px] rounded-[20px]"
        content={
          <span className="text-[28px] text-[#000]">
            已被{" "}
            <span className="text-[#ffa01c]">
              长安汽车是打发打发十分大苏打发公司
            </span>{" "}
            录用
          </span>
        }
        color="alert"
        icon={<CheckCircleFill />}
      />
      <div className="px-[28px]">
        <MCard>
          <div className="flex">
            <SvgIcon className="w-[32px] h-[32px]" name="se_my_name" />
            <div className="pl-[28px] text-[32px] text-[#000] font-bold">
              找来了
            </div>
          </div>
          <div className="flex pt-[28px]">
            <SvgIcon className="w-[32px] h-[32px]" name="se_my_id_card" />
            <div className="pl-[28px] text-[28px] text-[#000]">
              <span className="pr-[28px]">男</span>
              <span>36岁</span>
            </div>
          </div>
          <div className="flex pt-[28px]">
            <SvgIcon className="w-[32px] h-[32px]" name="se_enterprise_s" />
            <div className="pl-[28px] text-[28px] text-[#000] ">找来了</div>
          </div>
          <div className="flex py-[28px]">
            <SvgIcon className="w-[32px] h-[32px]" name="se_phone" />
            <div className="pl-[28px] text-[28px] text-[#000]">找来了</div>
          </div>
        </MCard>
        <MCard title="共享用工信息">
          <div className="flex text-[28px] pb-[28px]">
            <div className="w-[154px] text-[#999]">学历</div>
            <span>大学本科</span>
          </div>
        </MCard>
      </div>
    </PageContainer>
  );
};

export default EmployInfoDetail;
