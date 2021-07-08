import React, {lazy, Suspense} from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import {Redirect, Route, Switch} from 'react-router-dom';
import Auth from 'views/auth';
import MainLayout from 'layout/main';
import {useUser} from './providers/user';

const Home = lazy(() => import('views/home'));

const App = () => {
  const {isLogged} = useUser();

  if (!isLogged) return <Auth />;

  return (
    <Suspense fallback={<TopBarProgress />}>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect to='/' />
        </Switch>
      </MainLayout>
    </Suspense>
  );
};

export default App;
