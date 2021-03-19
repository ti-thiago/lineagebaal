import React from "react";
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
  useLocation,
} from "react-router-dom";

interface RouteProps extends ReactDOMRouteProps {
  path?: string;
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return <Component />;
      }}
    />
  );
};

export default Route;
