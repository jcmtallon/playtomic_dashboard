import { rootReducer } from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";

//Middleware
//const middleware = [reduxThunk];

const createStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

const store = createStore();
export default store;
