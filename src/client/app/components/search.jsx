import React,{Component} from "react";
import {render} from "react-dom";

class Search extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div className="searchWrapper">
                <div className="input-group">
                    <input type="text" className="form-control searchInput" />
                    <span className="input-group-btn">
                        <button className="btn btn-default searchButton" type="button">Search</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
