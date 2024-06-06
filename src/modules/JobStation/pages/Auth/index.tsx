import Header from "@/components/Header";
import { FC } from "react";
import "./index.less";
import AuthIcon from "@assets/js_auth.png";

const Auth: FC = () => {
  return (
    <div className="pt-[96px] h-full overflow-scroll">
      <Header title="实名认证" />
      <div className="js_auth w-[750px] h-[296px]">
        <div className="pt-[92px] pl-[56px] text-[36px] font-medium">
          <div>为了您的正常使用</div>
          <div className="text-[#2a57c9]">请您先完成平台实名认证</div>
        </div>
        <img src={AuthIcon} alt="" />
      </div>
    </div>
  );
};

export default Auth;
