import request from "./request";

export const saveSharePersonInfo = async (data) => {
  const res = await request.post("jy242_hrm01", { data });
  console.log("*** res", res);
};
