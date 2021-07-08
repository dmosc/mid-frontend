import {WebSocketLink} from '@apollo/client/link/ws';
import {backend} from 'config/environment';
import cookie from 'react-cookies';

const token = cookie.load('token');

const wsLink = new WebSocketLink({
  uri: backend.WS_URI,
  options: {
    reconnect: true,
    connectionParams: {
      token,
    },
  },
});

export default wsLink;