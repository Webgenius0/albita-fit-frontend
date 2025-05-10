import { configureStore } from "@reduxjs/toolkit";

import testReducer from "./features/testSlice";
import registerReducer from "./features/registerSlice";

export const store = configureStore({
  reducer: {
    test: testReducer,
    registerInfo: registerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
