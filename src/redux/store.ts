import { combineReducers, configureStore } from "@reduxjs/toolkit";

import testReducer from "./features/testSlice";
import registerReducer from "./features/registerSlice";
import pendingUserInfoReducer from "./features/pendingUserInfoSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persist configuration
const persistConfig = { key: "root", storage, whitelist: ["pendingUserInfo"] };

// all reducers combined
const rootReducer = combineReducers({
  test: testReducer,
  registerInfo: registerReducer,
  pendingUserInfo: pendingUserInfoReducer,
});

// merged the root reducer with the persist configuration that makes a new reducer
const upgradedReducer = persistReducer(persistConfig, rootReducer);

// updated redux store for persisting
export const store = configureStore({
  reducer: upgradedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
