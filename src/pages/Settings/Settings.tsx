import { Link } from "react-router-dom";
import { signOut } from "../../services/firebase/auth";

export const Settings = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};
