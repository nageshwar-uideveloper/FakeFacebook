import React,{Component,PropTypes} from "react";

class Form extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <form
                    method="post"
                    autoComplete="off"
                    className={"form-horizontal "+this.props.baseClass}
                    action={this.props.formAction}
                    onSubmit={this.props.onFormSubmit}>
                        {this.props.children}
                </form>
            </div>
        );
    }
}

export default Form;
