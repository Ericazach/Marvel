import React from "react";

function CharItemRandom({ name, img, description, series }) {
  return (
    <div className="container ">
      <div className="d-flex flex-column justify-content-center text-center">
        <img className="size align-self-center" src={img} alt="hero" />
        <div className="">
          <p className="text-uppercase title ">{name}</p>
          {description ? (
            <>
              <h4>Description</h4>
              <div className="p-4 ">{description}</div>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul className="lista">
              {series
                ? series.map((title) => (
                    <li key={Math.random() * 1000}>{title.name}</li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharItemRandom;
