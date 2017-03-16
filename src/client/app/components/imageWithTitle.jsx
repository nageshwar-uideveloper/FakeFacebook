import React,{Component} from "react";

class ImageWithTitle extends Component {
    constructor() {
        super();
    }
    render(){
        const authorImage = this.props.authorImage?
                        require(this.props.authorImage):
                            this.props.gender==="male"?
                                require("images/male_avatar_png.png"):require("images/female_avatar_png.png");
        return(
            <div className={"post-header "+this.props.postHeaderClass}>
                <span className={"post-header-image"}>
                    <img src={(authorImage)} alt={authorImage} />
                </span>
                <span className={"post-header-desc "+this.props.postHeaderDescClass}>
                    <div className={"post-header-title "+this.props.postHeaderTitleClass}>
                        <span>{this.props.title}</span>
                        <span>{this.props.separator}</span>
                        <span>{this.props.subTitle}</span>
                    </div>
                    <div className={"post-header-desc"}>
                        <span className={"post-header-desc-text"}>{this.props.descText}</span>
                        <span className={"post-header-desc-links"}>{this.props.descLinks}</span>
                    </div>
                </span>
            </div>
        );
    }
}

export default ImageWithTitle;
