import PageContainer from "@/components/PageContainer";
import { FC, lazy, useEffect, useState } from "react";
import "./index.less";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { IRoute } from "@/routes";
import MTabBar from "@/components/MTabBar";

const routes: IRoute[] = [
  {
    path: "/home",
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: "/employInfoList",
    component: lazy(() => import("./pages/EmployInfoList")),
  },
  {
    path: "/enterpriseCenter",
    component: lazy(() => import("./pages/EnterpriseCenter")),
  },
];

const ShareEmployInfo: FC = () => {
  const navigate = useNavigate();

  const [key, setKey] = useState<string>("home");

  const handleTabChange = (key: string) => {
    setKey(key);
    navigate("/shareEmployInfo/" + key);
  };

  return (
    <div id="share_employ_info">
      <PageContainer
        title={
          {
            home: "首页",
            employInfoList: "共享用工信息",
            enterpriseCenter: "企业中心",
          }[key] as string
        }
      >
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
          <Route
            path="/"
            element={<Navigate to="/shareEmployInfo/home" replace />}
          />
        </Routes>
        <MTabBar
          tabs={[
            {
              key: "home",
              title: "信息采集",
              icon: "se_home",
            },
            {
              key: "employInfoList",
              title: "共享用工",
              icon: "se_share_employ",
            },
            {
              key: "enterpriseCenter",
              title: "企业中心",
              icon: "se_enterprise",
            },
          ]}
          onChange={handleTabChange}
        />
      </PageContainer>
    </div>
  );
};

export default ShareEmployInfo;
