import { createSlice } from "@reduxjs/toolkit";
import { service } from "@/utils";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: "",
    userInfo: {},
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

const { setToken } = userStore.actions;
const userReducer = userStore.reducer;

/**
 * 登录功能
 */
const handleLogin = (formData) => {
  return async (dispatch) => {
    const { data } = await service.post("/authorizations", formData);
    dispatch(setToken(data.token));
  };
};

export { handleLogin, setToken };
export default userReducer;
