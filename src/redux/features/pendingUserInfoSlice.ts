import { createSlice } from "@reduxjs/toolkit";

type defaultState = {
  accountStatus: string;
  isTestGiven: boolean;
  email: string | null;
  resetToken?: string | null;
};
const initialState: defaultState = {
  accountStatus: "",
  isTestGiven: false,
  email: null,
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
    setResetToken: (state, action) => {
      return {
        ...state,
        resetToken: action.payload,
      };
    },
  },
});
export const { setPendingUserInfo,setResetToken } = pendingUserInfo.actions;
export default pendingUserInfo.reducer;
