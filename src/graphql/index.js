import {ApolloClient, InMemoryCache, split} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import cookies from 'react-cookies';
import wsLink from './links/websocket';
import httpLink from './links/http';
import {setContext} from '@apollo/client/link/context';

const link = split(({query}) => {
  const {kind, operation} = getMainDefinition(query);

  return kind === 'OperationDefinition' && operation === 'subscription';
}, wsLink, httpLink);

const authLink = setContext((_, {headers}) => {
  const token = cookies.load('token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache({
    typePolicies: {
      Document: {
        fields: {
          versions: {
            merge: true,
          },
        },
      },
    },
  }),
});

export default client;