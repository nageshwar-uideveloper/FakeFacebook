import React,{Component, PropTypes} from "react";

class ImagePreview extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        //let images = this.props.images.map()
        return(
            <div className={"imagePreviewWrapper "+this.props.baseClass}>

            </div>
        );
    }
}

export default ImagePreview;
