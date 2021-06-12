import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthProvider";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </AuthProvider>
      </Router>
    </Provider>
  );
};

export default App;
