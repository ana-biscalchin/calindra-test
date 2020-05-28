import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

const App = () => (
  <Router history={browserHistory}>
    <Routes />
  </Router>
);

export default App;
