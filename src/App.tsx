import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { Settings } from "./pages/Settings";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/AuthProvider";

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <Route exact path="/signin" component={SignIn} />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
