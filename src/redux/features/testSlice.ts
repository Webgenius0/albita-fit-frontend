import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const defaultState = {
  currentSlideStep: 0,
  info: {},
};

export const testSlice = createSlice({
  name: "testSlice",
  initialState: defaultState,
  reducers: {
    setCurrentSlideStep: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        currentSlideStep: action.payload,
      };
    },

    setInfo: (state, action) => {
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload,
        },
      };
    },
  },
});

export const { setCurrentSlideStep, setInfo } = testSlice.actions;

export default testSlice.reducer;
