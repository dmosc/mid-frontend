import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';
import AuthLayout from 'layout/auth';

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './login'));
const Register = lazy(() => import(/* webpackChunkName: "Login" */ './register'));

const Auth = () => (
  <AuthLayout>
    <Suspense fallback={<TopBarProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Redirect to='/login' />
      </Switch>
    </Suspense>
  </AuthLayout>
);

export default Auth;