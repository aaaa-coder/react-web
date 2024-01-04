const tokenName = "token";

/**
 * 获取token
 */
const getToken = () => {
  return localStorage.getItem(tokenName);
};

/**
 * 设置token
 */
const setToken = (token) => {
  localStorage.setItem(tokenName, token);
};

/**
 * 删除token
 */
const removeToken = () => {
  localStorage.removeItem(tokenName);
};

export { getToken, setToken, removeToken };
