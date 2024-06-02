import { Toast } from "antd-mobile";
import axios from "axios";

axios.defaults.baseURL = "";

axios.interceptors.request.use((config) => {
  const token = "";
  token && (config.headers.Authorization = token);
  config.headers["Content-Type"] = "application/json";
  config.headers["channelCode"] = "jms";
  return config;
});

axios.interceptors.response.use((res) => {
  const { code, errMsg } = res;
  if (code === -1) {
    // todo 清空token和用户信息
  } else if (code !== 0) {
    Toast.show({
      icon: "fail",
      content: errMsg || "",
      duration: 2000,
    });
  }
});

const request = axios;

export default request;
