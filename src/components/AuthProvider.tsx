import { ReactNode, useEffect, useState } from "react";

import { useTsDispatch } from "../hooks/useTsDispatch";
import { onAuthStateChange } from "../services/firebase/auth";
import { updateSession } from "../store/slices/session";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useTsDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChange(
      (isLoading) => setIsLoading(isLoading),
      (session) => dispatch(updateSession(session))
    );
    return unsubscribe;
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return <>{children}</>;
};
