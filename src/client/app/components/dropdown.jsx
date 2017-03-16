import React,{Component} from "react";

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.onClickSubMenu = this.onClickSubMenu.bind(this)
    }
    onClickSubMenu(ev){
        this.props.subMenuHandler(ev, selectedItem)
        e.preventDefault();
    }
    render(){
        const ddMenuItems = this.props.ddMenuItems;
        const ddMenu = ddMenuItems.map((item,index)=>(
            <li key={index}><a href="#" onClick={this.subMenuHandler}>
                <div className="input-group input-group-blank">
                    {item.icon.show?
                        (<span className="input-group-addon">{item.icon.html}</span>):
                        (<span className="input-group-addon">{item.icon.html}</span>)}
                    <div>
                        {item.title.show?
                            (<div>{item.title.html}</div>):
                            (<div>{item.title.html}</div>)}
                        {item.desc.show?
                            (<div>{item.desc.html}</div>):
                            (<div>{item.desc.html}</div>)}
                    </div>
                </div>
            </a></li>
        ));
        return(
            <div className={"btn-group "+this.props.baseClass}>
                <button type="button" className={"btn dropdown-toggle "+this.props.buttonClass} data-toggle="dropdown">
                    {this.props.dynamic?this.props.selectedMenu:this.props.menuTitle}
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                    {ddMenu}
                </ul>
            </div>
        );
    }
}

export default Dropdown;
