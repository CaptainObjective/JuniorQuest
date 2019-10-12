import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import 'semantic-ui-css/semantic.min.css';
import style from '../src/Views/style.css';
import apollo from './apollo';

ReactDOM.render(
  <ApolloProvider client={apollo}>
    <BrowserRouter>
    <div className="main">

        <App />
    
      </div>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'),
);
