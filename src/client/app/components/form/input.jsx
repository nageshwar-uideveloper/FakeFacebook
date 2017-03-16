import React,{Component, PropTypes} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inValid: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }
    static propTypes: {
        baseClass: PropTypes.string,
        inputType: PropTypes.string,
        inputClass: PropTypes.string,
        labelName: PropTypes.string,
        inputName: PropTypes.string
    }
    static defaultProps: {
        showErrors: true,
        multiLine: false,
        singleInput: false
    }
    handleChange(e){
        var val = e.target.value;
    }
    handleBlur(e){
        var val = e.target.value;
        if(!val){
            this.setState({
                inValid: true,
                errorMsg: "This field is required"
            });
        }else {
            this.setState({
                inValid: false,
                errorMsg: ""
            });
        }
    }
    handleKeyUp(e){
        this.props.onInputKeyup(e);
    }
    render(){
        var classes = ["form-group"];
        classes.push(this.props.baseClass);
        classes.push(this.state.inValid?"has-error":"");
        return(
            <div>{
                (!this.props.multiLine && !this.props.singleInput)?
                    <div className={classes.join(" ")}>
                        <label className="control-label">{this.props.labelName}</label>
                            <input type={this.props.inputType} className={"form-control "+this.props.inputClass} name={this.props.inputName} onBlur={this.handleBlur} />
                        {this.props.showErrors && this.state.inValid && <span className="help-block">{this.state.errorMsg}</span>}
                    </div>
                :this.props.multiLine?
                    <textarea className={"form-control "+this.props.inputClass} name={this.props.inputName} onBlur={this.handleBlur} onKeyUp={this.handleKeyUp} placeholder={this.props.placeholder}></textarea>
                :
                    <input type={this.props.inputType} className={"form-control "+this.props.inputClass} name={this.props.inputName} onBlur={this.handleBlur} onKeyUp={this.handleKeyUp} />
            }
            </div>
        );
    }
}

export default Input;
