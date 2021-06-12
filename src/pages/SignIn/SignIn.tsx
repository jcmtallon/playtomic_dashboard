import app from "../../base";
import { useCallback } from "react";

export const SignIn = () => {
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().signInWithEmailAndPassword(email.value, password.value);
      console.log("no problem");

      const user = app.auth().currentUser;
      console.log(user);

      // user?.updateProfile({
      //   displayName: "Playtomic",
      // });

      // await app
      //   .auth()
      //   .currentUser?.getIdToken()
      //   .then(function (idToken) {

      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // history.push("/");
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
