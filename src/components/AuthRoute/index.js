const { getToken } = require("@/utils");
const { Navigate } = require("react-router-dom");

/**
 * 验证是否存在token，存在就跳转到layout，不存在就跳转到登录页
 * @param {*} param0
 * @returns
 */
//  直接使用一个组件进行逻辑判断，而不是通过导航守卫进行判断。
const AuthRoute = ({ children }) => {
  const token = getToken();

  if (token) {
    // 然后改成这样就不会新增元素
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export default AuthRoute;
