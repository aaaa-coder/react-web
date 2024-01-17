import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/styles/init.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import store from "./store";
import { Provider } from "react-redux";
import "normalize.css";
import "./assets/iconfont/iconfont.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
// import moment from "moment";
// import "moment/dist/locale/zh-cn";
// moment.locale("zh-cn");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ConfigProvider>
);
