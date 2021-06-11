import { BrowserRouter as Router, Route } from "react-router-dom";

import { Login } from "pages/Login";
import { SignUp } from "pages/SignUp";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </>
    </Router>
  );
};

export default App;
