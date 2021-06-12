import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

//Middleware
//const middleware = [reduxThunk];

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = createStore();
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type TSDispath = typeof store.dispatch;
