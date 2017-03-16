import React,{Component} from "react";
import {render} from "react-dom";

import Container from "components/layout/container.jsx";
import Form from "components/form/form.jsx";
import Input from "components/form/input.jsx";
import Button from "components/form/button.jsx";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            isValidForm: true,
            errors: {
                message: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let validForm = this.state.validForm;
        if(validForm){
            this.state.errors.message = "Username and password doesnot match";
        }
    }
    handleValidate(e){
        let val = e.target.value;

        if(val !== ""){
            this.setState({
                isValidForm: false
            });
        }else{
            this.setState({
                isValidForm: true
            });
        }
    }
    render() {
        let fields = [
            {inputType:"text",inputName:"username",labelName:"Username",baseClass:"",inputClass:""},
            {inputType:"password",inputName:"password",labelName:"Password",baseClass:"",inputClass:""}
        ];
        const fieldsMap = fields.map((field)=>{
            let props = {
                key : field.inputName,
                labelName: field.labelName,
                inputType: field.inputType,
                inputName: field.inputName,
                baseClass: field.baseClass,
                inputClass: field.inputClass,
                onInputChange: this.handleValidate
            };
            return <Input {...props} />
        },this);

        const errors = this.state.errors.message;

        return(
            <Container baseClass="loginContainer">
                <div className="col-sm-8">

                </div>
                <div className="col-sm-4">
                    <div className="col-xs-12 loginFormWrapper clearfix">
                        <div className={"panel panel-primary "+this.props.panelType}>
                            <div className="panel-heading">
                                <h3 className="block-title">Facebook</h3>
                            </div>
                            <div className="panel-body">
                                <Form baseClass=""
                                    onFormSubmit={this.handleSubmit}>
                                    {fieldsMap}
                                    <Button baseClass="" buttonClass="btn-primary" buttonText="Login" isDisabled={this.state.isValidForm}/>
                                    {errors}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Login;
