import ReactDOM from "react-dom";
import React from "react";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Notes:
// npx create-react-app my-app --template redux-typescript
// with toolkit you dont need to add redux-thunk??

// user?.updateProfile({
//   displayName: "Playtomic",
// });

// {
//   "name": "Playtomic",
//   "iss": "https://securetoken.google.com/fir-auth-test-e7726",
//   "aud": "fir-auth-test-e7726",
//   "auth_time": 1623510204,
//   "user_id": "SPkrYn6gvnWGc7lccA99VdLY6N33",
//   "sub": "SPkrYn6gvnWGc7lccA99VdLY6N33",
//   "iat": 1623510204,
//   "exp": 1623513804,
//   "email": "test@play.com",
//   "email_verified": false,
//   "firebase": {
//     "identities": {
//       "email": [
//         "test@play.com"
//       ]
//     },
//     "sign_in_provider": "password"
//   }
// }

// import decode from 'jwt-decode';
