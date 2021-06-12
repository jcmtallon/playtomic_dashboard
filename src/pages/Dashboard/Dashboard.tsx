import { Link } from "react-router-dom";
import { signOut } from "../../services/firebase/auth";

export const Dashboard = () => {
  return (
    <div>
      HOME
      <Link to={"/settings"}>Settings</Link>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};
