import { lazy } from "react";

export interface IRoute {
  path: string;
  component: React.FC;
}

const routes: IRoute[] = [
  {
    path: "/shareEmployInfo/index",
    component: lazy(() => import("./modules/ShareEmployInfo")),
  },
  {
    path: "/shareEmployInfo/login",
    component: lazy(() => import("./modules/ShareEmployInfo/pages/Login")),
  },
  {
    path: "/shareEmployInfo/employInfoDetail",
    component: lazy(
      () => import("./modules/ShareEmployInfo/pages/EmployInfoDetail")
    ),
  },
  {
    path: "/shareEmployInfo/employInfoList",
    component: lazy(
      () => import("./modules/ShareEmployInfo/pages/EmployInfoList")
    ),
  },
  {
    path: "/shareEmployInfo/enterpriseCenter",
    component: lazy(
      () => import("./modules/ShareEmployInfo/pages/EnterpriseCenter")
    ),
  },
  {
    path: "/shareEmployInfo/myEmployInfo",
    component: lazy(
      () => import("./modules/ShareEmployInfo/pages/MyEmployInfo")
    ),
  },
];

export default routes;
