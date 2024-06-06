import { Toast } from "antd-mobile";
import axios from "axios";

axios.defaults.baseURL = "http://10.71.204.2:30001/";

axios.interceptors.request.use((config) => {
  const token = "";
  token && (config.headers.Authorization = token);
  config.headers["Content-Type"] = "application/json";
  config.headers["channelCode"] = "jms";
  console.log("*** config.url", config);
  config.url = "terminal/api/business/getData.do?apiCode=" + config.url;
  return config;
});

// axios.interceptors.response.use((res) => {
//   // console.log("*** res", res);
//   // const { code, errMsg } = res;
//   // console.log("*** res.code", res.code);
//   // if (code === -1) {
//   //   // todo 清空token和用户信息
//   // } else if (code !== "1") {
//   //   console.log("*** errMsg", errMsg);
//   //   Toast.show({
//   //     icon: "fail",
//   //     content: errMsg || "网络异常",
//   //     duration: 2000,
//   //   });
//   // }
// });

const request = axios;

export default request;
