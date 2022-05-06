import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ErrorPage} from "../../components/pages/ErrorPage";
import React from "react";
import {WarrantyFormPage} from "../../components/pages/form/WarrantyFormPage";
import store from "../../redux/stores/formStore";
import {Provider} from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/form/warranty" component={WarrantyFormPage} exact/>
                    <Route path="/form/error" component={ErrorPage} exact/>
                    <Redirect to={{
                        pathname: "/form/warranty",
                    }}/>
                    <Redirect to={{
                        pathname: "/form/error",
                        state: {
                            msgTitle: "404 NOT FOUND",
                            msgDescription: "The resource requested could not be found on this server!"
                        }
                    }}/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}