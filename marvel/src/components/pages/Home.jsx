import React, { useState } from "react";
import SearchBar from "../header/SearchBar";
import Grid from "../Grid";
import CharItem from "../charItem/CharItem";

const IMG_FANTASTIC = "portrait_uncanny";

function Home() {
  const [heroes, setHeroes] = useState([]);

  let charItems;

  if (heroes) {
    charItems = heroes.map((hero) => (
      <CharItem
        id={hero.id}
        name={hero.name}
        img={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
        key={hero.id}
      />
    ));
  }

  return (
    <div className="container w-50">
      <SearchBar setter={setHeroes} />
      <Grid>{charItems ? charItems : null}</Grid>
    </div>
  );
}

export default Home;
