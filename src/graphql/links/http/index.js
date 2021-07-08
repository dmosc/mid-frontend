import {HttpLink} from '@apollo/client';
import {backend} from 'config/environment';

const httpLink = new HttpLink({
  uri: backend.HTTP_URI,
  credentials: 'include',
});

export default httpLink;