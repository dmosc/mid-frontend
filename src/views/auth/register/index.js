import React, {lazy} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

const MediatorForm = lazy(() => import('./mediator-form'));
const CompanyForm = lazy(() => import('./company-form'));
const FormType = lazy(() => import('./form-type'));

const Register = () => {
  return (
    <Switch>
      <Route path='/register/mediator' component={MediatorForm} />
      <Route path='/register/company' component={CompanyForm} />
      <Route path='/register' component={FormType} />
      <Redirect to='/register' />
    </Switch>
  );
};

export default Register;
