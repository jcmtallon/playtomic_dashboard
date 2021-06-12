import { createSlice } from "@reduxjs/toolkit";

export interface Session {
  userName?: string;
  token?: string;
  email?: string;
}

//TODO: make it null.

export const initialState: Session = {};

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    updateSession(_, action: { payload: Session }) {
      return action.payload;
    },
    clearSession() {
      return initialState;
    },
  },
});

export const { updateSession, clearSession } = sessionSlice.actions;
export default sessionSlice.reducer;
