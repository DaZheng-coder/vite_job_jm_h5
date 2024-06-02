import { FC } from "react";
import HomeIcon from "@assets/se_home_icon.png";
import HomeText from "@assets/se_home_text.png";
import MenuCard from "@/components/MenuCard";
import ShareEmployIcon from "@assets/se_coll_icon.png";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home h-full">
      <div className="h-[478px] flex items-center">
        <img className="w-[310px] h-[160px] ml-[56px]" src={HomeText} />
        <img className="w-[384px] h-[414px]" src={HomeIcon} />
      </div>
      <div className="px-[28px]">
        <MenuCard
          icon={ShareEmployIcon}
          title="共享用工信息采集"
          subTitle="输入您的共享用工采集信息"
          onClick={() => navigate("/shareEmployInfo/editEmployInfo")}
        />
      </div>
    </div>
  );
};

export default Home;
