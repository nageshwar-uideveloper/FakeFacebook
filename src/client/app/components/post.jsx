import React,{Component} from "react";

import Dropdown from "components/dropdown.jsx";
import ImageWithTitle from "components/imageWithTitle.jsx";

class Post extends Component {
    constructor() {
        super();
    }
    render(){
        const postHeaderProps = {
            title: this.props.title,
            descText: this.props.desc,
            gender: "male",
            postHeaderDescClass: "",
            postHeaderTitleClass: "",
            postHeaderClass: ""
        };
        const ddProps = {
            baseClass: "postDropdown",
            buttonClass: "btn-link",
            dynamic: false,
            menuTitle: <span className="fa fa-angle-down"></span>,
            ddMenuItems: [
                {
                    icon:{show:false,html:""},
                    title:{show:true,html:"Edit"},
                    desc:{show:false,html:""}
                },
                {
                    icon:{show:false,html:""},
                    title:{show:true,html:"Delete"},
                    desc:{show:false,html:""}
                }
            ]
        };
        return(
            <div className={"postWrapper "}>
                <ImageWithTitle {...postHeaderProps} />
                <span className={"postActions"}>
                    <Dropdown {...ddProps} />
                </span>
            </div>
        );
    }
}

export default Post;
