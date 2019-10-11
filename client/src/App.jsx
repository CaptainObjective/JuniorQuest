import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Views/Home';
import Login from './Views/Login';

const App = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default App;
