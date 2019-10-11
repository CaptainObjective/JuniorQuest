import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import { apollo } from 'utils';

ReactDOM.render(
  <ApolloProvider client={apollo}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
