import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { NotFound, Search } from './pages';

function Routes() {
  return (
    <Switch>
      <Route component={Search} exact path="/" />
      <Route component={NotFound} exact path="/not-found" />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default Routes;
