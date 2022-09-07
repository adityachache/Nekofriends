import React from "react";
import Card from "./Card";

function CardList(props) {
  return props.userList.map((info, index) => {
    return (
      <Card key={index} id={info.id} name={info.name} email={info.email} />
    );
  });
}

export default CardList;
