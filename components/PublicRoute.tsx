import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";

class PublicRoute extends React.Component<any> {
    render() {
        let {component: Component, restricted, userState, ...rest} = this.props;
        return (
            // restricted = false meaning public route
            // restricted = true meaning restricted route
            <Route {...rest} render={props => (
                userState.isValid && restricted ?
                    <Redirect to="/admin/dashboard"/>
                    : <Component {...props} />
            )}/>
        );
    }
}

const mapStateToProps = function (state: any) {
    return {
        userState: state.userReducer,
    }
}

export const PublicRouteState = connect(mapStateToProps)(PublicRoute);