import React, { useEffect } from "react";
import { Switch, BrowserRouter, Redirect } from "react-router-dom";
import Route from "./Route";
import Index from "../pages/Index";
import Page from "../pages/Page";

const Routes: React.FC = () => {
  return (
    <Switch>
      <BrowserRouter>
        <Route path="/" exact component={Index} />

        <Route path="/page" component={Page} />
      </BrowserRouter>
    </Switch>
  );
};

export default Routes;
