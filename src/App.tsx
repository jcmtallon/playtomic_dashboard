import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
