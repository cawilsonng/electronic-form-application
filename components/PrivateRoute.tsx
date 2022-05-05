import React, {Component} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from "react-redux";

class PrivateRoute extends React.Component<any> {
    render() {
        let {component: Component, userState, ...rest} = this.props;
        return (
            <Route {...rest} render={props => (
                userState.isValid ?
                    <Component {...props} />
                    : <Redirect to="/admin/login"/>
            )}/>
        );
    }
}

const mapStateToProps = function (state: any) {
    return {
        userState: state.userReducer,
    }
}

export const PrivateRouteState = connect(mapStateToProps)(PrivateRoute);