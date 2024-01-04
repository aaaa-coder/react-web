import { createSlice } from "@reduxjs/toolkit";
import { service, getToken, setToken as setUserToken } from "@/utils";
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
  },
});

const { setToken, setUserInfo } = userStore.actions;
const userReducer = userStore.reducer;

/**
 * 登录功能
 */
const handleLogin = (formData) => {
  return async (dispatch) => {
    const { code, data } = await login(formData);
    if ([200, 201].includes(code)) {
      dispatch(setToken(data.token));
    }
  };
};

const handleGetUserInfo = () => {
  return async (dispatch) => {
    const { data } = await getUserInfo();
    dispatch(setUserInfo(data));
  };
};

export { handleLogin, handleGetUserInfo, setToken };
export default userReducer;
