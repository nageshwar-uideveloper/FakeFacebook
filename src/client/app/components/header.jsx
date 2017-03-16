import React,{Component} from "react";
import {render} from "react-dom";
import {Link} from "react-router";

import Container from "components/layout/container.jsx";
import Search from "components/search.jsx";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            userCount: 0,
            messageCount: 0,
            notificationCount: 0
        };
    }
    render() {
        return(
                <nav className="navbar navbar-default navbar-top-header" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#top_header_menu">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><span className="fa fa-facebook-official fa-2x"></span></a>
                    </div>

                    <div className="collapse navbar-collapse" id="top_header_menu">
                        <div className="col-sm-6 nopadding">
                            <form className="navbar-form" role="search">
                                <Search />
                            </form>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Find Friends</Link></li>
                            <li><a className="nav-icon" href="#">
                                <span className="fa fa-user-plus"></span>
                                {this.state.userCount?<span className="count">{this.state.userCount}</span>:""}
                            </a></li>
                            <li><a className="nav-icon" href="#">
                                <span className="fa fa-comments"></span>
                                {this.state.messageCount?<span className="count">{this.state.messageCount}</span>:""}
                            </a></li>
                            <li><a className="nav-icon" href="#">
                                <span className="fa fa-globe"></span>
                                {this.state.notificationCount?<span className="count">{this.state.notificationCount}</span>:""}
                            </a></li>
                            <li className="dropdown">
                                <a href="#" className="nav-icon dropdown-toggle" data-toggle="dropdown"><span className="fa fa-gear"></span><b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/settings">Settings</Link></li>
                                    <li className="divider"></li>
                                    <li><Link to="/logout">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Header;
