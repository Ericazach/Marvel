import React from "react";
import { Link } from "react-router-dom";

function CharItem({ id, name, img }) {
  return (
    <Link to={`/${id}`}>
      <div>
        <img src={img} alt="heroe" />
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default CharItem;
