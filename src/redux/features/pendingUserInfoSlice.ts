import { createSlice } from "@reduxjs/toolkit";

type defaultState = {
  accountStatus: string;
  isTestGiven: boolean;
};
const initialState: defaultState = {
  accountStatus: "",
  isTestGiven: false,
};
const pendingUserInfo = createSlice({
  name: "pendingUserInfoSlice",
  initialState: initialState,
  reducers: {
    setPendingUserInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export const { setPendingUserInfo } = pendingUserInfo.actions;
export default pendingUserInfo.reducer;
