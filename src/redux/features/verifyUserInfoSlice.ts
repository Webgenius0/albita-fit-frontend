import { createSlice } from "@reduxjs/toolkit";

const verifyUserInfoSlice = createSlice({
  name: "verifyUserInfoSlice",
  initialState: {},
  reducers: {
    setVerifyUserInfo: (_, action) => {
      return {
        ...action.payload,
      };
    },
  },
});
export const { setVerifyUserInfo } = verifyUserInfoSlice.actions;
export default verifyUserInfoSlice.reducer;
