import Header from "@/components/Header";
import { FC, lazy } from "react";
import "./index.less";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { IRoute } from "@/routes";
import { TabBar } from "antd-mobile";
import SvgIcon from "@/components/SvgIcon";

const routes: IRoute[] = [
  {
    path: "/imWorker",
    component: lazy(() => import("./pages/IMWorker")),
  },
  {
    path: "/imEmployer",
    component: lazy(() => import("./pages/IMEmployer")),
  },
  {
    path: "/nearStation",
    component: lazy(() => import("./pages/NearStation")),
  },
  {
    path: "/userCenter",
    component: lazy(() => import("./pages/UserCenter")),
  },
];

const tabs = [
  {
    key: "imWorker",
    title: "我是零工",
    icon: (active: boolean) =>
      !active ? (
        <SvgIcon className="w-[45px] h-[45px]" name="se_im_worker" />
      ) : (
        <SvgIcon className="w-[45px] h-[45px]" name="se_im_worker_act" />
      ),
  },
  {
    key: "imEmployer",
    title: "我是雇主",
    icon: (active: boolean) =>
      !active ? (
        <SvgIcon className="w-[45px] h-[45px]" name="se_im_employer" />
      ) : (
        <SvgIcon className="w-[45px] h-[45px]" name="se_im_employer_act" />
      ),
  },
  {
    key: "nearStation",
    title: "附近驿站",
    icon: (active: boolean) =>
      !active ? (
        <SvgIcon className="w-[45px] h-[45px]" name="se_nearby" />
      ) : (
        <SvgIcon className="w-[45px] h-[45px]" name="se_nearby_act" />
      ),
  },
  {
    key: "userCenter",
    title: "个人中心",
    icon: (active: boolean) =>
      !active ? (
        <SvgIcon className="w-[45px] h-[45px]" name="se_user_center" />
      ) : (
        <SvgIcon className="w-[45px] h-[45px]" name="se_usercenter_act" />
      ),
  },
];

const JobStation: FC = () => {
  const navigate = useNavigate();

  const handleChangeTab = (key: string) => {
    navigate("/jobStation/" + key);
  };

  return (
    <div
      id="job_status"
      className="pt-[96px] pb-[194px] bg-[#f7f8fc] h-full overflow-scroll w-full"
    >
      <Header title="零工驿站" />
      <div>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} Component={route.component} />
          ))}
          <Route
            path="/"
            element={<Navigate to="/shareEmployInfo/home" replace />}
          />
        </Routes>
      </div>
      <div className="bg-white fixed bottom-0 left-0 w-full h-[194px] pt-[28px]">
        <TabBar
          className="js_tabbar"
          defaultActiveKey={(() => {
            const paths = location.pathname.split("/");
            const keys = tabs.map((t) => t.key);
            const key =
              paths.find((path) => keys.includes(path)) || tabs[0].key;
            return key;
          })()}
          onChange={handleChangeTab}
        >
          {tabs.map((item) => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
};

export default JobStation;
