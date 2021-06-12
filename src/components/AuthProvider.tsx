import { ReactNode, useEffect, useState } from "react";
import { auth } from "../base";
import { useTsDispatch } from "../hooks/useTsDispatch";
import { clearSession, updateSession } from "../store/slices/session";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useTsDispatch();

  console.log(isLoading);

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
          const session = {
            userName: user.displayName || undefined,
            email: user.email || undefined,
            token: token,
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
