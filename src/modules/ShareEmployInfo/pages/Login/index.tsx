import PageContainer from "@/components/PageContainer";
import { FC, useState } from "react";
import LoginIcon from "@assets/se_login_icon.png";
import "./index.less";
import { Button, Checkbox, Form, Input, Radio } from "antd-mobile";

const Login: FC = () => {
  const [isPhoneLogin, setIsPhoneLogin] = useState<boolean>(true);

  return (
    <PageContainer title="登录">
      <div className="se_login h-full">
        <div className="h-[340px] flex items-center">
          <div className="text-[40px] leading-[52px] font-bold pl-[56px] pr-[20px]">
            <div>欢迎登陆</div>
            <div>共享用工平台</div>
          </div>
          <img className="w-[378px] h-[256px]" src={LoginIcon} />
        </div>
        <div>
          <Form className="se_login_form" layout="vertical">
            {isPhoneLogin ? (
              <>
                <Form.Item name="username">
                  <Input placeholder="请输入手机号" clearable />
                </Form.Item>
                <Form.Item
                  name="password"
                  extra={
                    <span className="text-[#28px] text-[#ffa01c]">
                      发送验证码
                    </span>
                  }
                >
                  <Input
                    placeholder="请输入手机验证码"
                    clearable
                    type="password"
                  />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item name="username">
                  <Input placeholder="请输入账号" clearable />
                </Form.Item>
                <Form.Item name="password">
                  <Input placeholder="请输入密码" clearable type="password" />
                </Form.Item>
              </>
            )}
            <Form.Item
              extra={<img src="" className="w-[162px] h-[62px] my-[18px]" />}
            >
              <Input placeholder="请输入验证码" clearable />
            </Form.Item>
            <Form.Item>
              <Checkbox value="1" className="se_login_checkbox">
                <span className="text-[24px] ">
                  我已阅读并同意{" "}
                  <span className="text-[#ffa01c]">《用户协议》</span>{" "}
                  <span className="text-[#ffa01c]">《隐私政策》</span>{" "}
                </span>
              </Checkbox>
            </Form.Item>
          </Form>
        </div>
        <div className="px-[56px]">
          <Button
            color="primary"
            shape="rounded"
            className="se_login_btn w-[638px] !text-[30px] !h-[88px]"
          >
            登录
          </Button>
          <Button
            onClick={() => setIsPhoneLogin(!isPhoneLogin)}
            shape="rounded"
            className="w-[638px] !text-[#ffa01c] !border-[#ffa01c] !text-[30px] !h-[88px]"
          >
            {isPhoneLogin ? "账号登陆" : "手机号登陆"}
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Login;
