import { Reducer } from "redux";
import { combineReducers } from "redux";
import { Session, sessionReducer } from "./slices/session";

export interface RootState {
  session: Session;
}

export const rootReducer: Reducer<RootState> = combineReducers({
  session: sessionReducer,
});
