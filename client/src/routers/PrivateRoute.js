import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component,  auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth 
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

const mapStateToProps = (state) => ({
    auth: !!state.user._id
})

export default connect(mapStateToProps)(PrivateRoute)
