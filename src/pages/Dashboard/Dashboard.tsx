import { Link } from "react-router-dom";
import { auth } from "../../base";

export const Dashboard = () => {
  return (
    <div>
      HOME
      <Link to={"/settings"}>Settings</Link>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};
