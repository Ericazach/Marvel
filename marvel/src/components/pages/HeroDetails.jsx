import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchHero } from "../../libs/utils";

export default function HeroDetails() {
  let { id } = useParams();

  const [hero, setHero] = useState();

  let name;
  let description;
  let thumbnailPath;
  let thumbnailExtension;
  let thumbnailUrl;
  let series;

  useEffect(() => {
    fetchHero(id)
      .then((data) => setHero(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (hero) {
    name = hero.data.results[0].name;
    description = hero.data.results[0].description;
    thumbnailPath = hero.data.results[0].thumbnail.path;
    thumbnailExtension = hero.data.results[0].thumbnail.extension;
    thumbnailUrl = `${thumbnailPath}.${thumbnailExtension}`;
    series = hero.data.results[0].series.items;
  }

  if (!hero) return;

  return (
    <div className="container ">
      <div className="d-flex flex-column justify-content-center text-center">
        <img className="w-50 align-self-center" src={thumbnailUrl} alt="hero" />
        <div className="">
          <p className="text-uppercase title fs-1">{name}</p>
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
