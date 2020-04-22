import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ loggedinUser, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            loggedinUser
                ? <Component {...props} />
                : <Redirect to='/signup' />
        )} />
    )
}

const mapStateToProps = (state) => ({
    loggedinUser: state.user.loggedinUser
})

export default connect(mapStateToProps)(PrivateRoute);
