import React from "react";
import { Link } from "react-router-dom";

function CharItem({ id, name, img }) {
  return (
    <Link className="enlace" to={`/${id}`}>
      <div>
        <img src={img} alt="heroe" />
        <p className="title text-uppercase fs-2 text-danger">{name}</p>
      </div>
    </Link>
  );
}

export default CharItem;
