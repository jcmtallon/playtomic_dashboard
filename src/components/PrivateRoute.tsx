import { Redirect, Route, RouteProps } from "react-router-dom";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute = ({ ...routeProps }: PrivateRouteProps) => {
  //TODO: authenticate
  const isAuthenticated = true;

  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={"/signin"} />;
  }
};

export default PrivateRoute;
