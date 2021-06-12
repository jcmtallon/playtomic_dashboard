import { BrowserRouter as Router, Route } from "react-router-dom";

import { store } from "./store";
import { Provider } from "react-redux";
import { SignIn } from "./pages/SignIn";
import { Dashboard } from "./pages/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/signin" component={SignIn} />
      </Router>
    </Provider>
  );
};

export default App;
