import { createSlice } from "@reduxjs/toolkit";

type RegisterState = {
  email?: string;
};

const defaultState: RegisterState = {};

export const registerSlice = createSlice({
  name: "registerSlice",
  initialState: defaultState,
  reducers: {
    setRegisterInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setRegisterInfo } = registerSlice.actions;

export default registerSlice.reducer;
