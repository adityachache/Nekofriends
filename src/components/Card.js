import React from "react";
import "tachyons";

function Card(props) {
  return (
    <div className="tc dib bg-lightest-blue ma3 pa2 bw2-ns shadow-1 grow avenir">
      <img src={`https://robohash.org/${props.id}?set=set4`} alt="randomcat" />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
