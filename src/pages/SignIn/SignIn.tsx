import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import app from "../../base";

export const SignIn = () => {
  const [errorMesasge, setErrorMessage] = useState(null);

  const history = useHistory();

  //TODO: extract this logic so we can change the provider.
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        //TODO: Add type to error.
        //TODO: display error message corresponding to code.  //auth/user-not-found
        setErrorMessage(error.message);
      }
    },
    [history]
  );

  return (
    // TODO: style this code
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign In</button>
        {/* TODO: display error message */}
        {errorMesasge && <div>{errorMesasge}</div>}
      </form>
    </div>
  );
};
