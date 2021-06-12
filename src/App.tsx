import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthProvider";
import { Settings } from "./pages/Settings";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
