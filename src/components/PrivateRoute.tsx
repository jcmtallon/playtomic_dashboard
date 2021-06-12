import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute = ({ ...routeProps }: PrivateRouteProps) => {
  const isAuthorized = useAuth();

  if (isAuthorized) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={"/signin"} />;
  }
};

export default PrivateRoute;
