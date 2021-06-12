import { auth } from "../../base";

export const Dashboard = () => {
  return (
    <div>
      HOME
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};
