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
