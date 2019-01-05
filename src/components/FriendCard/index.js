import React from "react";
import "./style.css";

function FriendCard(props) 
{
  console.log(props);
  return (
    <div className="Image">
      <div className="img-container" >
        <img alt={props.type.name} src={props.type.image} className="img" onClick= {() => props.handleIncrement(props.type.id)} ></img>
      </div>
    </div>
  );
}

export default FriendCard;
