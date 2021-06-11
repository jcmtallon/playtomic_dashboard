import { BrowserRouter as Router, Route } from "react-router-dom";

import { Login } from "pages/Login";
import { SignUp } from "pages/SignUp";
import { Home } from "./pages/Home";
import { store } from "store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </>
      </Router>
    </Provider>
  );
};

export default App;
