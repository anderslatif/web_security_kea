import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";
// import PageProfileAbout from "../pages/PageProfile";
import PageProfileAbout from "../pages/PageProfileAbout";
import PageProfilePosts from "../pages/PageProfilePosts";
import PageBook from "../pages/PageBook";
import PageChat from "../pages/PageChat";
import { Widget, addResponseMessage } from "react-chat-widget";
import PageFeed from "../pages/PageFeed";
import PageNotFound from "../pages/PageNotFound";
// import { Provider } from "react-redux";

class AppRouter extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <div>
                        {/* <Widget /> */}
                        <Switch>
                            <Redirect exact={true} from="/" to="/login" />
                            <Route path="/login" component={PageLogin} />
                            <Route path="/register" component={PageRegister} />
                            {/* <Route exact={true} path="/profile/about" component={PageProfileAbout} /> */}
                            <Route exact={true} path="/profile" component={PageProfileAbout} />
                            <Route exact={true} path="/profile/posts" component={PageProfilePosts} />
                            <Route exact={true} path="/profile/posts/:bookid" component={PageBook} />
                            {/* <Route exact={true} path="/chat" component={PageChat} /> */}
                            <Route path="/feed" component={PageFeed} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default AppRouter;