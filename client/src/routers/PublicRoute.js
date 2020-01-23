import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({
    auth,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component = {(props) => (
        auth ? (
            <Redirect to = '/home' />
        ):(
            <Component {...props}/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    auth: !!state.user._id
});

export default connect(mapStateToProps)(PublicRoute);