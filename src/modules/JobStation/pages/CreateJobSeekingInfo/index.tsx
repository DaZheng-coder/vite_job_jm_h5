import Header from "@/components/Header";
import { Steps, Tabs } from "antd-mobile";
import { Step } from "antd-mobile/es/components/steps/step";
import { FC, useState } from "react";

const CreateJobSeekingInfo: FC = () => {
  const [step, setStep] = useState<string>("0");

  return (
    <div className="pt-[96px] pb-[196px]">
      <Header title="新建信息" />
      <Steps current={Number(step)}>
        <Step title="实名认证" />
        <Step title="求职" />
        <Step title="零工风采" />
        <Step title="提交信息" />
      </Steps>
      <Tabs activeKey={step}>
        <Tabs.Tab title="" key={"0"}>
          菠萝1234
        </Tabs.Tab>
        <Tabs.Tab title="" key={"1"}>
          西红柿
        </Tabs.Tab>
        <Tabs.Tab title="" key={"2"}>
          蚂蚁
        </Tabs.Tab>
        <Tabs.Tab title="" key={"3"}>
          蚂蚁
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default CreateJobSeekingInfo;
