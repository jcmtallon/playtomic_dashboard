import { Reducer } from "redux";
import { combineReducers } from "redux";

export interface RootState {
  // session: {name: string},
}

export const rootReducer: Reducer<RootState> = combineReducers({
  // something
});
