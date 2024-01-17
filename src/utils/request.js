import axios from "axios";
import { getToken } from "./auth";
import { message } from "antd";

const service = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 30000,
});

const ingoreList = ["/authorizations"];
service.interceptors.request.use(
  (config) => {
    let token = getToken();
    if (token && !ingoreList.includes(config.headers.url)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (data) => {
    if ([200, 201].includes(data.status)) {
      // http请求成功，但操作失败
      // if (data.data.code !== 0 && data.data.code !== 200 && data.data.msg) {
      // 此处对后端返回错误信息统一处理
      // if (data.data.code == 401) {
      //   ElMessage.warning({
      //     message: data.data.msg
      //   });
      //   removeToken();
      //   router.push("/login");
      // } else if (
      //   data.data.code === 500 &&
      //   data.data.msg !== "账号名或登录密码不正确"
      // ) {
      //   ElMessage.warning({
      //     message: data.data.msg
      //   });
      // }
      // return { code: 500, msg: data.data.msg };
      // }
    }
    return data.data;
  },
  (error) => {
    let status = error?.response?.status;
    console.log(status);
    switch (status) {
      case 400:
        message.warning("服务器错误，请联系管理员");
        break;

      default:
        break;
    }

    return Promise.reject(error);
  }
);

export default service;
