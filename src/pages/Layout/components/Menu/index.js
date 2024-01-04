import "./index.scss";

import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
const AsideMenu = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("首页", "/home"),
    getItem("文章管理", "/artcle"),
    getItem("发表文章", "/publish"),
  ];

  // 路由实例
  let navigate = useNavigate();

  // 本地url
  let location = useLocation();
  const selectedKeys = location.pathname;

  const handleClickMenu = (route) => {
    navigate(route.key);
  };

  return (
    <div className="menu_wrapper">
      <Menu
        selectedKeys={selectedKeys}
        mode="inline"
        theme="dark"
        items={items}
        onClick={handleClickMenu}
      />
    </div>
  );
};

export default AsideMenu;
