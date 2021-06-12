import { useEffect, useState } from "react";
import { auth } from "../base";

export const useAuth = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user);
      setIsAuthorized(true);
    });
  }, []);

  return isAuthorized;
};
