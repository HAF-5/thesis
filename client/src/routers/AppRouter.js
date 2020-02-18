import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


import MySites from './../components/MySites/mySites';
import Signin from './../components/auth/Signin';
import Signup from './../components/auth/Signup';
import Home from './../components/Home/home';
import Editor from './../components/Editor/editor';
import Activate from './../components/auth/Activate';
import Forgot from './../components/auth/Forgot';
import Reset from './../components/auth/Reset';
import createProject from './../components/CreateProject/createProject';
import Profile from './../components/Profile/profile';
import dashboardWebsite from './../components/DashboardWebsite/dashboardWebsite';


const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={Home} exact />
          <PublicRoute path='/signup' component={Signup} />
          <PublicRoute path='/login' component={Signin} />
          <PrivateRoute path='/sites' component={MySites} />

          <PrivateRoute path='/createProject' component={createProject} />

          <PrivateRoute path='/editor/:id' component={Editor} />
          <PublicRoute path='/auth/activate/:token' component={Activate} />
          <PublicRoute path='/auth/password/forgot' component={Forgot} />
          <PublicRoute path='/auth/password/reset/:token' component={Reset} />
          <PrivateRoute path='/dashboard/profile' component={Profile} />
          <PrivateRoute path='/dashboard/edit-website' component={dashboardWebsite} />
          <Route>
            <div>not found</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter;
