import React, {lazy, Suspense} from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import {Redirect, Route, Switch} from 'react-router-dom';
import Auth from 'views/auth';
import MainLayout from 'layout/main';
import {useUser} from './providers/user';

const Mediations = lazy(() => import('views/mediations'));
const Complaints = lazy(() => import('views/complaints'));

const App = () => {
  const {isLogged} = useUser();

  if (!isLogged) return <Auth />;

  return (
    <MainLayout>
      <Suspense fallback={<TopBarProgress />}>
        <Switch>
          <Route exact path='/mediations' component={Mediations} />
          <Route exact path='/complaints' component={Complaints} />
          <Redirect to='/mediations' />
        </Switch>
      </Suspense>
    </MainLayout>
  );
};

export default App;
