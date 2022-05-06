import React, {useEffect} from "react";
import {DashboardPage} from "../../components/pages/dashboard/DashboardPage";
import {ForgotPasswordPage} from "../../components/pages/dashboard/ForgotPasswordPage";
import {PrivateRouteState} from "../../components/PrivateRoute";
import {LoginPage} from "../../components/pages/dashboard/LoginPage";
import {PublicRouteState} from "../../components/PublicRoute";
import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";
import {ErrorPage} from "../../components/pages/ErrorPage";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/dashboardHooks";
import {Provider} from "react-redux";
import store from "../../redux/stores/dashboardStore";
import {useCookies} from "react-cookie";
import UserAction from "../../redux/actionTypes/dashboard/UserAction";
import createAction from "../../redux/actionTypes/Action";

function History(props: any) {
    const userState = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();

    const history = useHistory();
    useEffect(() => {
            if (userState.isValid) {
                history.push({pathname: "/admin/dashboard",});
            } else {
                history.push({pathname: "/admin/login",});
            }
        }, [userState.isValid],
    );

    const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);

    useEffect(() => {
        if (!userState.refreshToken && cookies.refreshToken) {
            dispatch(createAction(UserAction.REFRESH_TOKEN, cookies.refreshToken));
        }
    }, []);

    useEffect(() => {
        if (userState.refreshToken === '') {
            removeCookie("refreshToken");
        } else {
            setCookie("refreshToken", userState.refreshToken);
        }
        const timeout = setInterval(() => {
            if (userState.isValid) {
                dispatch(createAction(UserAction.REFRESH_TOKEN, userState.refreshToken));
            }
        }, 180000);
        return () => clearInterval(timeout);
    }, [userState.refreshToken]);

    return (<div>{props.children}</div>);
}

export default function App(props: any) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <History>
                        <PublicRouteState restricted={true} component={ForgotPasswordPage} path="/admin/forgot" exact/>
                        <PublicRouteState restricted={true} component={LoginPage} path="/admin/login" exact/>
                        <PrivateRouteState component={DashboardPage} path="/admin/dashboard" exact/>
                        {/*<Redirect from="/admin" to="/admin/dashboard"/>*/}
                        <Route path="/admin/error" component={ErrorPage} exact/>
                        <Redirect to={{
                            pathname: "/admin/error",
                            state: {
                                msgTitle: "404 NOT FOUND",
                                msgDescription: "The resource requested could not be found on this server!"
                            }
                        }}/>
                    </History>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}