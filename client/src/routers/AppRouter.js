import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from './../components/Home/home';
import Login from './../components/Login/login';
import Signup from './../components/Signup/signup';

const AppRouter = () => {
    return (
    <Router>
        <div>
          <Switch>
            <PublicRoute path = '/' component = {Login} exact/>
            <PublicRoute path = '/signup' component = {Signup} exact/>
            <PrivateRoute path = '/home' component = {Home}/>
            <Route>
              <div>not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter;
