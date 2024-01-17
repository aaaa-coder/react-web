import { createSlice } from "@reduxjs/toolkit";
import { getToken, removeToken, setToken as setUserToken } from "@/utils";
import { login, getUserInfo } from "@/apis/user";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() ?? "",
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      setUserToken(action.payload);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    logout(state) {
      state.token = "";
      state.userInfo = {};
      removeToken();
    },
  },
});

const { setToken, setUserInfo, logout } = userStore.actions;
const userReducer = userStore.reducer;

/**
 * 登录功能
 */
const handleLogin = (formData) => {
  return async (dispatch) => {
    const { data } = await login(formData);
    // if ([200, 201].includes(code)) {
    dispatch(setToken(data.token));
    // }
  };
};

/**
 * 获取用户数据
 * @returns
 */
const handleGetUserInfo = () => {
  return async (dispatch) => {
    const { data } = await getUserInfo();
    dispatch(setUserInfo(data));
  };
};

export { handleLogin, handleGetUserInfo, logout };
export default userReducer;
