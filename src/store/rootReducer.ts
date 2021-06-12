import { combineReducers } from "redux";
import session from "./slices/session";

export const rootReducer = combineReducers({
  session,
});
