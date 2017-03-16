import React,{Component, PropTypes} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <button className={"btn "+this.props.buttonClass} disabled={this.props.isDisabled}>{this.props.buttonText}</button>
        );
    }
}

export default Input;
