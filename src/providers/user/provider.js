import React, {createContext, useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import cookies from 'react-cookies';
import jwt from 'jsonwebtoken';
import {useApolloClient} from '@apollo/client';
import {GET_USER} from './requests';
import {message} from 'antd';

const UserContext = createContext({});

const UserProvider = ({children}) => {
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(!!cookies.load('token'));

  const apolloClient = useApolloClient();

  const getUser = useCallback(async () => {
    const token = cookies.load('token');
    const tokenPayload = token ? jwt.decode(token) : undefined;

    if (tokenPayload) {
      const {data, error} = await apolloClient.query({query: GET_USER, variables: {id: tokenPayload.id}});

      if (error) {
        message.error('Ha habido un error cargando el perfil!');
      }

      if (data) {
        setUser(data.user);
      }
    }
  }, [isLogged, apolloClient]);

  const logout = () => {
    cookies.remove('token');
    setUser();
    setIsLogged(false);
  };

  useEffect(() => {
    getUser().then().catch();
  }, [getUser]);

  return (
    <UserContext.Provider value={{user, isLogged, setIsLogged, getUser, logout}}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.object,
};

export {UserContext};
export default UserProvider;