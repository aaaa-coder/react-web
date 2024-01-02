import axios from "axios";

const service = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 30000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use({});

export default service;
