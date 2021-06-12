import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Router>
    </Provider>
  );
};

export default App;
