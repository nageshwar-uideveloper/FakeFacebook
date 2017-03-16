import React, {Component} from "react";

class File extends Component {
    constructor(props) {
        super(props);
        this.fileChangeHandler = this.fileChangeHandler.bind(this);
        this.fileBtnClickHandler = this.fileBtnClickHandler.bind(this);
    }
    fileChangeHandler(e){
        console.log(e);
    }
    fileBtnClickHandler(e){
        this.refs.fileInput.click();
    }
    render(){
        return(
            <div className={"fileUploadWrapper "+this.props.baseClass}>
                <input type="file" className="form-control hidden" ref="fileInput" onChange={this.fileChangeHandler} />
                <button type="button" id="fileUploadButton" className={"btn fileUploadButton "+this.props.buttonClass} onClick={this.fileBtnClickHandler}>
                    {this.props.label.iconClass?(<span className={this.props.label.iconClass}></span>):""}
                    {this.props.label.text?(<span>{this.props.label.text}</span>):""}
                </button>
            </div>
        );
    }
}

export default File;
