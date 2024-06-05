import Header from "@/components/Header";
import MCard from "@/components/MCard";
import {
  Checkbox,
  Form,
  List,
  NavBar,
  Popup,
  SearchBar,
  Steps,
  Tabs,
  TextArea,
} from "antd-mobile";
import { Step } from "antd-mobile/es/components/steps/step";
import { FC, useState } from "react";
import "./index.less";
import MInput from "@/components/MInput";
import { EFields } from "@/modules/ShareEmployInfo/filedsMap";
import {
  CheckShieldOutline,
  ExclamationCircleOutline,
  RightOutline,
} from "antd-mobile-icons";
import JSActionBar from "@/components/JSActionBar";
import MDrawerPicker from "@/components/MDrawerPicker";
import { useJobStation } from "@/store";
import JobStation from "../..";
import MInputPicker from "@/components/MInputPicker";
import SvgIcon from "@/components/SvgIcon";
import WorkerCard from "@/components/JSUserCard";
import JSUserCard from "@/components/JSUserCard";
import GetPicture from "@assets/js_get_picture.png";
import GetPictureIcon from "@assets/js_get_picture_icon.png";
import LightIcon from "@assets/js_light.png";

const CreateRecruitmentInfo: FC = () => {
  const [step, setStep] = useState<string>("0");
  const [searchStationVisible, setSearchStationVisible] =
    useState<boolean>(false);
  const { jobInfo, updateJobInfo } = useJobStation();
  const [jobTypeVisible, setJobTypeVisible] = useState<boolean>(false);
  const [salaryVisible, setSalaryVisible] = useState<boolean>(false);
  const [settlementVisible, setSettlementVisible] = useState<boolean>(false);
  const [positionVisible, setPositionVisible] = useState<boolean>(false);
  useState<boolean>(false);

  const renderStep0 = () => {
    return (
      <MCard title="实名认证" blue>
        <div className="relative  pb-[28px]">
          <div className="border-[2px] w-[638px] h-[418px] rounded-[20px] border-dashed border-[#999] flex justify-center items-center">
            <img className="w-[478px] h-[286px]" src={GetPicture} alt="" />
          </div>
          <div className="absolute top-[50%] left-[50%] bg-[#2a57c9] rounded-[100px] flex items-center justify-center w-[436px] h-[88px] text-[white] text-[24px] translate-x-[-50%] translate-y-[-50%]">
            <img className="w-[48px] h-[48px]" src={GetPictureIcon} alt="" />
            <span className="leading-[48px]">点击完成企业营业执照的上传</span>
          </div>
          <div className="pt-[28px] flex justify-between items-center">
            <div className=" flex items-center text-[24px] text-[#2a57c9]">
              <img className="w-[32px] h-[32px]" src={LightIcon} alt="" />
              <span className="leading-[32px]">点击查看营业执照示例</span>
            </div>
            <div className="text-[24px] text-[#999] leading-[32px]">
              仅用于身份核实
            </div>
          </div>
        </div>
      </MCard>
    );
  };

  const renderStep1 = () => {
    return (
      <MCard title="招工" blue>
        <Form layout="horizontal">
          <MInput
            formProps={{
              label: "所属驿站",
              name: EFields.belongStation,
              extra: (
                <div
                  className="flex items-center"
                  onClick={() => setSearchStationVisible(true)}
                >
                  {JobStation[EFields.belongStation] ? (
                    <span className="text-[28px] text-[#000]">
                      {JobStation[EFields.belongStation]}
                    </span>
                  ) : (
                    <>
                      <span className="text-[28px]">请选择</span>
                      <RightOutline />
                    </>
                  )}
                </div>
              ),
            }}
            inputProps={{
              placeholder: "请输入",
              className: "m_input_picker",
            }}
          />
          <MInput
            formProps={{
              label: "工作行业",
              name: EFields.jobType,
              extra: (
                <div
                  className="flex items-center"
                  onClick={() => setJobTypeVisible(true)}
                >
                  {JobStation[EFields.jobType] ? (
                    <span className="text-[28px] text-[#000]">
                      {JobStation[EFields.jobType]}
                    </span>
                  ) : (
                    <>
                      <span className="text-[28px]">请选择</span>
                      <RightOutline />
                    </>
                  )}
                </div>
              ),
            }}
            inputProps={{
              placeholder: "请输入",
              className: "m_input_picker",
            }}
          />
          <MInput
            formProps={{
              label: "工作名称",
              name: EFields.jobTitle,
            }}
            inputProps={{ placeholder: "请输入" }}
          />
          <MInput
            formProps={{
              label: "薪资待遇",
              name: EFields.salary,
              extra: (
                <div
                  className="flex items-center"
                  onClick={() => setSalaryVisible(true)}
                >
                  {JobStation[EFields.salary] ? (
                    <span className="text-[28px] text-[#000]">
                      {JobStation[EFields.salary]}
                    </span>
                  ) : (
                    <>
                      <span className="text-[28px]">请选择</span>
                      <RightOutline />
                    </>
                  )}
                </div>
              ),
            }}
            inputProps={{
              placeholder: "请输入",
              className: "m_input_picker",
            }}
          />
          {/* <MInputPicker
        label="学历"
        name={EFields.educationBg}
        form={form}
        columns={[educationBgs]}
        getValue={(v) => v[0]}
      /> */}
          <MInput
            formProps={{
              label: "工作地址",
              name: EFields.position,
              extra: (
                <div
                  className="flex items-center"
                  onClick={() => setPositionVisible(true)}
                >
                  {JobStation[EFields.position] ? (
                    <span className="text-[28px] text-[#000]">
                      {JobStation[EFields.position]}
                    </span>
                  ) : (
                    <>
                      <span className="text-[28px]">请选择</span>
                      <RightOutline />
                    </>
                  )}
                </div>
              ),
            }}
            inputProps={{
              placeholder: "请输入",
              className: "m_input_picker",
            }}
          />
          <Form.Item label="工作内容" layout="vertical">
            <TextArea
              className="js_text_area"
              placeholder="请输入你的招工需求，有助于您更快、更准确地招到零工。描述最低不得少于10字"
              autoSize={{ minRows: 3, maxRows: 5 }}
            />
          </Form.Item>
        </Form>
      </MCard>
    );
  };

  const renderStep2 = () => {
    return (
      <MCard title="零工风采" blue className="pb-[28px]">
        <div className="pb-[28px]">
          <span className="text-[28px]">上传视频</span>
          <span className="text-[26px] text-[#999]">{`(建议上传视频大小不超过200M)`}</span>
        </div>
        <SvgIcon className="w-[180px] h-[180px]" name="js_video" />
        <div className="my-[28px] pt-[28px] border-solid border-t-[2px] border-[#e5e5e5] border-l-0 border-r-0 border-b-0">
          <span className="text-[28px]">上传图片</span>
        </div>
        <SvgIcon className="w-[180px] h-[180px]" name="js_picture" />
      </MCard>
    );
  };

  return (
    <div className="pt-[90px] pb-[196px] bg-[#f7f8fc] h-full overflow-scroll">
      <Header title="新建信息" />
      <div className="bg-[white] h-[170px] mb-[-40px] pt-[28px]">
        <Steps current={Number(step)}>
          <Step title="实名认证" />
          <Step title="招工" />
          <Step title="工作环境" />
          <Step title="提交信息" />
        </Steps>
      </div>
      <Tabs className="js_create_tab" activeKey={step}>
        <Tabs.Tab title="" key={"0"}>
          {renderStep0()}
          <div className="text-[26px] text-[#999]">
            <ExclamationCircleOutline />
            <span className="pl-[16px]">
              每个账号只能进行一次实名认证，认证成功不支持修改
            </span>
          </div>
          <div className="text-[26px] text-[#999] pt-[28px] flex">
            <div className="text-[28px]">
              <CheckShieldOutline />
            </div>
            <span className="pl-[16px]">
              信息安全保护中，认证信息将用于创建信息等功能，与账号唯一绑定，未经您允许不对外提供
            </span>
          </div>
          <div className="fixed bottom-[222px] left-0 px-[28px]">
            <Checkbox className="js_bottom_checkbox">
              我已阅读并同意
              <span className="text-[#2a57c9]">《实名认证协议》</span>
            </Checkbox>
          </div>
        </Tabs.Tab>
        <Tabs.Tab title="" key={"1"}>
          {renderStep1()}
        </Tabs.Tab>
        <Tabs.Tab title="" key={"2"}>
          {renderStep2()}
        </Tabs.Tab>
        <Tabs.Tab title="" key={"3"}>
          <JSUserCard />
          {renderStep1()}
          {renderStep2()}
        </Tabs.Tab>
      </Tabs>
      <Popup
        visible={searchStationVisible}
        position="right"
        bodyStyle={{ width: "100%" }}
      >
        <NavBar onBack={() => setSearchStationVisible(false)}>驿站选择</NavBar>
        <div className="p-[28px]">
          <SearchBar placeholder="请输入驿站名称"></SearchBar>
        </div>
        <List>
          <List.Item className="text-[28px]">1</List.Item>
          <List.Item className="text-[28px]">2</List.Item>
          <List.Item className="text-[28px]">3</List.Item>
        </List>
      </Popup>
      <Popup
        visible={jobTypeVisible}
        position="bottom"
        bodyStyle={{ width: "100%", height: "50%" }}
        onMaskClick={() => setJobTypeVisible(false)}
      >
        <div className="py-[32px] text-center text-[30px] font-medium border-b-[2px] border-solid border-[#e5e5e5] border-t-0 border-l-0  border-r-0">
          工种类型
        </div>
        <div className="p-[28px]">
          <div className="w-[220px] py-[18px] bg-[#f5f5f5] rounded-[8px] text-center">
            传单派发
          </div>
        </div>
      </Popup>
      <Popup
        visible={salaryVisible}
        position="bottom"
        bodyStyle={{ width: "100%", height: "50%" }}
        onMaskClick={() => setSalaryVisible(false)}
      >
        <div className="py-[32px] text-center text-[30px] font-medium border-b-[2px] border-solid border-[#e5e5e5] border-t-0 border-l-0  border-r-0">
          薪资待遇
        </div>
        <div className="p-[28px]">
          <div className="w-[220px] py-[18px] bg-[#f5f5f5] rounded-[8px] text-center">
            100/天
          </div>
        </div>
      </Popup>
      <Popup
        visible={positionVisible}
        position="right"
        bodyStyle={{ width: "100%" }}
      >
        <div className="flex flex-col h-full relative">
          <NavBar onBack={() => setPositionVisible(false)}>新建信息</NavBar>
          <div className="p-[28px]">
            <SearchBar placeholder="搜索地点"></SearchBar>
          </div>
          <div className="bg-[orange] flex-1"></div>
          <div className="position bottom-0 left-0">
            <div className="text-center py-[32px] text-[30px] font-medium">
              选择地点
            </div>
            <div className="h-[584px] overflow-scroll">
              <div className="py-[28px] px-[28px] border-solid border-t-[1px] border-b-[1px] border-[#eee] border-l-0 border-r-0">
                <div className="text-[28px]">超级无敌奥特曼</div>
                <div className="pt-[8px] text-[26px] text-[#999]">旋风</div>
              </div>
            </div>
          </div>
        </div>
      </Popup>
      <JSActionBar
        nextText="下一步"
        onNext={() => setStep(String(Number(step) + 1))}
      />
    </div>
  );
};

export default CreateRecruitmentInfo;
