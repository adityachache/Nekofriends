import React from "react";


function Scroll(props) {
    return (
        <div className="ba" style={{overflowY: "scroll", height: "600px"}}>
            {props.children}
        </div>
    )
}
export default Scroll
