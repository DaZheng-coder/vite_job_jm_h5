import { lazy } from "react";

export interface IRoute {
  path: string;
  component: React.FC;
}

const routes: IRoute[] = [
  {
    path: "/shareEmployInfo/*",
    component: lazy(() => import("./modules/ShareEmployInfo")),
  },
  {
    path: "/shareEmployInfo/login",
    component: lazy(() => import("./modules/ShareEmployInfo/pages/Login")),
  },
  {
    path: "/shareEmployInfo/editEmployInfo",
    component: lazy(
      () => import("./modules/ShareEmployInfo/pages/EditEmployInfo")
    ),
  },
  {
    path: "/shareEmployInfo/myEmployInfo",
    component: lazy(
      () => import("./modules/ShareEmployInfo/pages/MyEmployInfo")
    ),
  },
  {
    path: "/shareEmployInfo/employInfoDetail",
    component: lazy(
      () => import("./modules/ShareEmployInfo/pages/EmployInfoDetail")
    ),
  },
];

export default routes;
