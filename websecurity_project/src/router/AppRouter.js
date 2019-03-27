import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";
import PageProfile from "../pages/PageProfile";
import PageProfileAbout from "../pages/PageProfileAbout";
import PageProfilePosts from "../pages/PageProfilePosts";
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
                            {/* <Route exact={true} path="/profile" component={PageProfile} /> */}
                            <Route exact={true} path="/profile/about" component={PageProfileAbout} />
                            <Route exact={true} path="/profile/posts" component={PageProfilePosts} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter;