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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
