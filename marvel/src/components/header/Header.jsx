import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { fetchHeroes } from "../../libs/utils";
import CharItem from "../charItem/CharItem";
import CharItemRandom from "../charItem/CharItemRandom";

function Header() {
  const [heroes, setHeroes] = useState([]);
  const IMG_FANTASTIC = "portrait_uncanny";

  const handleClick = async () => {
    try {
      let heroesNew = await fetchHeroes(makeid(1));
      setHeroes(heroesNew);
    } catch (err) {
      console.error(err);
    }
  };

  function makeid(length) {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  let charItems;
  let nameHero;

  if (heroes) {
    charItems = heroes.map((hero) => {
      return (
        <CharItemRandom
          id={hero.id}
          name={hero.name}
          description={hero.description}
          img={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
          series={hero.series.items}
          key={hero.id}
        />
      );
    });

    nameHero = charItems[Math.floor(Math.random() * charItems.length)];
  }

  return (
    <div className="container mt-4 ">
      <nav className="navbar bg-danger mb-5 rounded">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <h1 className="text-light ms-2 text-uppercase title logo">
              Marvel Heroes
            </h1>
          </a>

          <div className=" navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/random-character"
                  onClick={handleClick}
                >
                  <h4 className="text-light me-2 fs-1 text-uppercase title">
                    Generate Character
                  </h4>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>{charItems ? nameHero : null}</div>
    </div>
  );
}

export default Header;
