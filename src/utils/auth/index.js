import axios from 'axios';
import {backend} from 'config/environment';

const client = axios.create({
  baseURL: backend.AUTH_URI,
  withCredentials: true,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;
