import React from "react";
import 'tachyons';


function SearchBox(props) {
    
    return (
        <div className="ma4">
            <input onChange={props.searchChange} className="pa3 ba b--hot-pink" type="search" placeholder="Enter a name" />
        </div>
    )
}
export default SearchBox;
