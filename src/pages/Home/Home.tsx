import app from "base";

export const Home = () => {
  return (
    <div>
      HOME
      <button onClick={() => app.auth().singOut()}>Sign Out</button>
    </div>
  );
};
