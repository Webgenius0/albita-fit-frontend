import { createSlice } from "@reduxjs/toolkit";

export const registerSlice = createSlice({
  name: "registerSlice",
  initialState: {},
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
