import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name?: string;
  email: string;
  userId: string;
  authTime: number;
}

export interface Session {
  token?: string;
  user: User | null;
}

export const initialState: Session = {
  user: null,
};

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
