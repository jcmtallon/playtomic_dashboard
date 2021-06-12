import { ReactNode, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

import { auth } from "../firebaseSetup";
import { useTsDispatch } from "../hooks/useTsDispatch";
import { clearSession, updateSession } from "../store/slices/session";

interface JWToken {
  name?: string;
  auth_time: number;
  email: string;
  user_id: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useTsDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        setIsLoading(false);
        dispatch(clearSession());
        return;
      }

      user
        .getIdToken()
        .then((token) => {
          const decoded = jwt_decode<JWToken>(token);

          const session = {
            token: token,
            user: {
              name: decoded.name,
              email: decoded.email,
              userId: decoded.user_id,
              authTime: decoded.auth_time,
            },
          };

          dispatch(updateSession(session));
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
          //TODO: do something;
        });
    });

    return unsubscribe;
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return <>{children}</>;
};
