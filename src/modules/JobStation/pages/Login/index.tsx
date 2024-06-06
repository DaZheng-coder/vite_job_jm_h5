import PageContainer from "@/components/PageContainer";
import { FC, useState } from "react";
import LoginIcon from "@assets/js_login.png";
import "./index.less";
import { Button, Checkbox, Form, Input, Radio } from "antd-mobile";
import Header from "@/components/Header";

const Login: FC = () => {
  const [isPhoneLogin, setIsPhoneLogin] = useState<boolean>(true);

  const renderPhoneLogin = () => {
    return (
      <>
        <div>
          <div className="text-[30px] font-medium pb-[28px]">本机号码</div>
          <div className="text-[50px] font-medium pb-[28px]">1234123423</div>
        </div>
        <Checkbox className="js_bottom_checkbox">
          我已阅读并同意
          <span className="text-[#2a57c9]">《用户协议》</span>
          <span className="text-[#2a57c9]">《隐私政策》</span>
        </Checkbox>
      </>
    );
  };

  const renderCodeLogin = () => {
    return (
      <div>
        <Form layout="horizon">
          <Form.Item name="username">
            <Input placeholder="请输入手机号" clearable />
          </Form.Item>
          <Form.Item
            name="password"
            extra={
              <span className="text-[#28px] text-[#2a57c9]">发送验证码</span>
            }
          >
            <Input placeholder="请输入手机验证码" clearable type="password" />
          </Form.Item>
          <Form.Item
            extra={<img src="" className="w-[162px] h-[62px] my-[18px]" />}
          >
            <Input placeholder="请输入验证码" clearable />
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col pt-[96px] overflow-scroll">
      <Header title="登陆" />
      <div className="js_login px-[56px] flex-1">
        <div className="flex">
          <div className="w-[240px] h-[104px] text-[40px] font-medium pt-[132px] mr-[20px]">
            <div>欢迎登陆</div>
            <div>零工驿站系统</div>
          </div>
          <img
            className="w-[378px] h-[256px] my-[56px]"
            src={LoginIcon}
            alt=""
          />
        </div>
        <div className="pb-[56px]">
          {isPhoneLogin ? renderPhoneLogin() : renderCodeLogin()}
        </div>
        <Button
          className="w-full !h-[88px] !bg-[#2a57c9] !border-[#2a57c9] js_login_button"
          color="primary"
        >
          {isPhoneLogin ? "一键登陆" : "登陆"}
        </Button>
        <Button
          onClick={() => setIsPhoneLogin(!isPhoneLogin)}
          className=" w-full !border-[#2a57c9] !text-[#2a57c9] !h-[88px] !my-[28px] js_login_button_m"
        >
          {isPhoneLogin ? "验证码登陆" : "手机号一键登陆"}
        </Button>
      </div>
    </div>
  );
};

export default Login;
