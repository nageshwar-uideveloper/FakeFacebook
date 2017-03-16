import React, {Component} from "react";

export default class Base extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className={"baseContainer "+this.props.baseClass}>
                <div className="container">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
