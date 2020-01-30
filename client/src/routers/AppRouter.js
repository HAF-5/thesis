import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Dashboard from './../components/Dashboard/dashboard';
import Signin from './../components/auth/Signin';
import Signup from './../components/auth/Signup';
import Home from './../components/Home/home';
import Editor from './../components/Editor/editor';
import createProject from './../components/CreateProject/createProject'

const AppRouter = () => {
  return (
    <Router>
        <div>
          <Switch>
            <Route path = '/' component = {Home} exact/>
            <PublicRoute path = '/signup' component = {Signup} />
            <PublicRoute path = '/login' component = {Signin} />
            <PrivateRoute path = '/dashboard' component = {Dashboard}/>
            <PrivateRoute path = '/createProject' component = {createProject}/>
            <PrivateRoute path = '/editor/:title' component = {Editor}/>
            <Route>
              <div>not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter;
