import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Dashboard from './../components/Dashboard/dashboard';
import Signin from './../components/auth/Signin';
import Signup from './../components/auth/Signup';
import Home from './../components/Home/home';
import Editor from './../components/Editor/editor';

import Activate from './../components/auth/Activate';
import Forgot from './../components/auth/Forgot';
import Reset from './../components/auth/Reset';
import createProject from './../components/CreateProject/createProject'


const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path='/' component={Home} exact />
          <PublicRoute path='/signup' component={Signup} />
          <PublicRoute path='/login' component={Signin} />
          <PublicRoute path = '/dashboard' component = {Dashboard}/>
          <PublicRoute path = '/createProject' component = {createProject}/>
          <PrivateRoute path = '/editor/:title' component = {Editor}/>
          <PublicRoute path='/auth/activate/:token' component={Activate} />
          <PublicRoute path='/auth/password/forgot' component={Forgot} />
          <PublicRoute path='/auth/password/reset/:token' component={Reset} />
          <Route>
            <div>not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default AppRouter;
