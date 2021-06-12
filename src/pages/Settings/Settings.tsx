import { Link } from "react-router-dom";
import { auth } from "../../firebaseSetup";

export const Settings = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};
