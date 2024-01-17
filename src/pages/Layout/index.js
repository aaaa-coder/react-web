import "./index.scss";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { handleGetUserInfo } from "@/store/modules/user";
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetUserInfo());
  }, [dispatch]);

  const userInfo = useSelector((state) => state.user.userInfo);

  return (
    <div className="layout_wrapper">
      <NavBar userInfo={userInfo} />
      <div className="content">
        <Menu />

        <div className="layout_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
