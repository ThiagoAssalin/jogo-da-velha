import React from "react";
import "./card.css";

export default function Card(props) {

  return (
    <div className="card"  onClick={()=>{props.handleClick(props.index)}}>
      <span>{props.item}</span>
    </div>
  );
}
