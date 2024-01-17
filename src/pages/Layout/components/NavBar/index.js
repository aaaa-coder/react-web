import "./index.scss";
import { Popconfirm } from "antd";
import { logout } from "@/store/modules/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavBar = ({ userInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const cancel = () => {};
  return (
    <header className="nav_bar">
      <div className="nav_bar_left">helloMan</div>
      <div className="nav_bar_right">
        <div className="user_info">
          <span className="user_name">{userInfo.name}</span>
          <img
            src={[require("@/assets/images/common/avatar.jpg")]}
            alt="头像"
            className="user_avatar"
          />
        </div>

        <Popconfirm
          title="退出登录"
          description="确认退出登录吗？"
          onConfirm={handleLogout}
          onCancel={cancel}
          okText="确定"
          cancelText="取消"
        >
          {/* <Tooltip placement="top" title="退出登录"> */}
          <i className="logout_btn iconfont icon-tuichudenglu"></i>
          {/* </Tooltip> */}
        </Popconfirm>
      </div>
    </header>
  );
};

export default NavBar;
