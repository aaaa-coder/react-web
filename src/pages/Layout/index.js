import "./index.scss";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    console.log(123456);
  }, []);

  return (
    <div className="layout_wrapper">
      <NavBar />
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
