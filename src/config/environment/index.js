import dotenv from 'dotenv';
import urljoin from 'url-join';

dotenv.config();

const backend = {
  AUTH_URI: process.env.REACT_APP_SERVER_URI,
  HTTP_URI: urljoin(process.env.REACT_APP_SERVER_URI, 'graphql'),
  WS_URI: urljoin(process.env.REACT_APP_WS_URI, 'graphql'),
};

export {backend};
