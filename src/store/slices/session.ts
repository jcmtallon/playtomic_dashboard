import { createSlice } from "@reduxjs/toolkit";

export interface Session {
  displayName?: string;
  token?: string;
  email?: string;
}

export const initialState: Session = {};

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
export default sessionSlice.reducer;
