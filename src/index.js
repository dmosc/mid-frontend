import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloProvider} from '@apollo/client';
import {ThemeProvider} from 'styled-components';
import theme from 'config/theme';
import {UserProvider} from 'providers/user';
import './index.css';
import App from './App';
import client from './graphql';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Router basename='/'>
          <App />
        </Router>
      </UserProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
