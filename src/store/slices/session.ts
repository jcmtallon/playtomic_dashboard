import { bindActionCreators, createSlice } from "@reduxjs/toolkit";

export interface Session {
  data?: string;
  error?: string; //TODO: Axios
}

export const initialState: Session = {
  data: undefined,
  error: undefined,
};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    addSession(state, action: { payload: string; type: string }) {
      return { ...state, data: action.payload };
    },
    clearSession() {
      return initialState;
    },
  },
});

export const { addSession, clearSession } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
