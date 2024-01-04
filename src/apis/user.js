import { service } from "@/utils";

/**
 * 登录
 * @param { object } data 登录参数
 * @returns
 */
const login = (data) => {
  return service.post("/authorizations", data);
};

/**
 * 获取用户信息
 * @returns
 */
const getUserInfo = () => {
  return service.get("/user/profile");
};
export { login, getUserInfo };
