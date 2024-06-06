import request from "./request";

export const saveSharePersonInfo = async (data) => {
  const res = await request.post("jy242_hrm01", data);
};

export const getShareEmployInfoList = async (data) => {
  const res = await request.post("jy242_hrm07", data);
  console.log("*** res", res);
  return res;
};
