import React, {Component} from "react";

class VotesComponent extends Component {
    constructor() {
        super();
        this.state = {
            voteUpCount: 9,
            voteDownCount: 5
        };
        this.handleCount = this.handleCount.bind(this);
    }
    handleCount(type){
        switch (type) {
            case "up":
                this.setState({voteUpCount:this.state.voteUpCount+1});
                break;
            case "down":
                this.setState({voteDownCount:this.state.voteDownCount-1});
                break;
            default:

        }
    }
    render(){
        let self = this;
        return(
            <span>
                <div className="container">
                    <div className="row">
                        <button className="btn btn-success btnVoteUp" onClick={this.handleCount.bind(self,"up")}><span>{this.state.voteUpCount}</span> <i className="glyphicon glyphicon-thumbs-up"></i></button>
                        <button className="btn btn-danger btnVoteDown" onClick={this.handleCount.bind(self,"down")}><span>{this.state.voteDownCount}</span> <i className="glyphicon glyphicon-thumbs-down"></i></button>
                    </div>
                </div>
            </span>
        )
    }
}

export default VotesComponent;
