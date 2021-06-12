import app from "../../base";
import { useEffect } from "react";

export const Dashboard = () => {
  useEffect(() => {
    try {
      app.auth().onAuthStateChanged((user: any) => {
        console.log("user");
        console.log(user);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      HOME
      <button onClick={() => app.auth().signOut()}>Sign Out</button>
    </div>
  );
};
