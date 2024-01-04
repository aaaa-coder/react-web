import axios from "axios";
import { getToken } from "./auth";

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
  (data) => {},
  (error) => {
    let status = error?.response?.status;
    console.log(status);

    return Promise.reject(error);
  }
);

export default service;
