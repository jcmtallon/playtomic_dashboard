import { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";

import { useTsSelector } from "../../hooks/useTsSelector";
import { signIn } from "../../services/firebase/auth";

export const SignIn = () => {
  const session = useTsSelector((state) => state.session);
  const [errorMesasge, setErrorMessage] = useState(null);

  //TODO: extract this logic so we can change the provider.
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await signIn(email.value, password.value);
    } catch (error) {
      //TODO: display error message corresponding to code.  //auth/user-not-found
      setErrorMessage(error.message);
    }
  }, []);

  if (session.token) {
    return <Redirect to="/" />;
  }

  return (
    // TODO: style this code
    <div className="font-work-sans">
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
