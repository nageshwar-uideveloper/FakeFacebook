import React,{Component} from "react";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import Login from "components/login.jsx";
import Home from "components/home.jsx";
import Settings from "components/settings.jsx";

class RouterComponent extends Component {
    render() {
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/settings" component={Settings} />
            </Router>
        );
    }
}

export default RouterComponent;
