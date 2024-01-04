import "./index.scss";

const NavBar = () => {
  return (
    <header className="nav_bar">
      <div className="nav_bar_left">helloMan</div>
      <div className="nav_bar_right">
        <div className="user_info">
          <span className="user_name">helloMan</span>
          <img
            src={[require("@/assets/images/common/avatar.jpg")]}
            alt="头像"
            className="user_avatar"
          />
        </div>
        <div className="logout_btn">退出登录</div>
      </div>
    </header>
  );
};

export default NavBar;
