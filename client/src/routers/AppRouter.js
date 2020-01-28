import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Dashboard from './../components/Dashboard/dashboard';
import Signin from './../components/auth/Signin';
import Signup from './../components/auth/Signup';
import Home from './../components/Home/home';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/' component={Home} exact />
          <PublicRoute path='/signup' component={Signup} />
          <PublicRoute path='/signin' component={Signin} />
          <PublicRoute path='/home' component={Home} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route>
            <div>not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
