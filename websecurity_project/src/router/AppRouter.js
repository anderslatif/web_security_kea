import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";
// import { Provider } from "react-redux";

class AppRouter extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/login" component={PageLogin} />
                            <Route path="/register" component={PageRegister} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter;