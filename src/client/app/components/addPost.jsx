import React, {Component} from "react";

import Form from "components/form/form.jsx";
import Input from "components/form/input.jsx";
import Button from "components/form/button.jsx";
import File from "components/file.jsx";
import ImageWithTitle from "components/imageWithTitle.jsx";
import Dropdown from "components/dropdown.jsx";



class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValidForm: false,
            post: {
                value: ""
            }
        };
        this.keyUpHandler = this.keyUpHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.subMenuHandler = this.subMenuHandler.bind(this);
    }
    keyUpHandler(e){
        let val = e.target.value;

        if(val !== ""){
            this.setState({
                isValidForm: true,
                post: {
                    text: e.target.value
                }
            });
        }else{
            this.setState({
                isValidForm: false
            });
        }
    }
    handleSubmit(e){
        this.props.onPostAdd(this.state.post);
        e.preventDefault();
    }
    subMenuHandler(e){
        console.log("subMenuHandler...!!!");
    }
    render(){
        let addPostProps = {
            multiLine:true,
            inputName:"postTextarea",
            labelName:"",
            baseClass:"",
            inputClass:"",
            placeholder:"What's on your mind?",
            onInputKeyup: this.keyUpHandler
        };
        let addPostHeaderProps = {
            title: <Input {...addPostProps} />,
            descText: "",
            gender: "female",
            postHeaderDescClass: "",
            postHeaderClass: "",
            postHeaderTitleClass: ""
        };
        let photoVideoUploadProps = {
            baseClass: "",
            label:{
                iconClass: "fa fa-camera",
                text: "Photo/Video"
            }
        };
        let photoAlbumUploadProps = {
            baseClass: "",
            label:{
                iconClass: "fa fa-image",
                text: "Photo Album"
            }
        };
        let shareTypeDD = {
            baseClass: "shareTypeDropdown pull-right",
            buttonClass: "btn-primary",
            dynamic: true,
            onSubMenuSelected: this.subMenuHandler,
            ddMenuItems: [
                {
                    icon:{show:true,html:<span className="fa fa-earth"></span>},
                    title:{show:true,html:"Public"},
                    desc:{show:true,html:"Anyone on or off Facebook"}
                },
                {
                    icon:{show:true,html:<span className="fa fa-earth"></span>},
                    title:{show:true,html:"Private"},
                    desc:{show:true,html:"Anyone on or off Facebook"}
                }
            ]
        };
        let buttonProps = {
            buttonClass: "btn-primary pull-right",
            buttonText: "Post"
        };
        return(
            <div className={"addPostFormContainer"}>
                <Form baseClass=""
                    onFormSubmit={this.handleSubmit}>
                    <div className="form-group addPostHeader">
                        <div className="form-group addPostInput">
                            <ImageWithTitle {...addPostHeaderProps} />
                            <div className={"addPostImagePreview"}></div>
                        </div>
                        <div className="form-group addPostFileButtonsWrapper noborder">
                            <File {...photoVideoUploadProps} />
                            <File {...photoAlbumUploadProps} />
                        </div>
                    </div>
                    <div className="form-group addPostFooter">
                        <Button {...buttonProps}
                            isDisabled={!this.state.isValidForm}/>
                        <Dropdown {...shareTypeDD} />
                    </div>
                </Form>
            </div>
        );
    }
}

export default AddPost;
