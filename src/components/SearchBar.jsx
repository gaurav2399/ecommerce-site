import React from "react";

function SearchBar(){
    return (<div>
        <div className="search-bar">
            <label className="search-title">Search By</label>
            <div className="vl"></div>
            <input type="text" placeholder="What are you shopping for?" className="search-box"></input>
            <button className="search-btn">Search</button>
        </div>
        
    </div>);
};

export default SearchBar;