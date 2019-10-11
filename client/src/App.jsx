import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Views/Home';
import Login from './Views/Login';
import Store from './Views/Store';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/store" component={Store} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
