import React,{Component} from "react";
import {render} from "react-dom";

import Container from "components/layout/container.jsx";
import Header from "components/header.jsx";
import Timeline from "components/timeline.jsx";

class Home extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="homeContainer">
                <Container baseClass="headerContainer navbar-default">
                    <div className="col-xs-12">
                        <Header />
                    </div>
                </Container>
                <Container baseClass="mainContainer">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6">
                        <Timeline />
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;
