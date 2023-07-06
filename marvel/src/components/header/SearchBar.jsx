import React, { useRef } from "react";
import { fetchHeroes, fetchHeroesTotal } from "../../libs/utils";

function SearchBar({ setter }) {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;

    try {
      let heroes = await fetchHeroes(value);
      setter(heroes);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="d-flex">
        <input
          className="form-control me-2 text-danger mb-5 "
          type="search"
          placeholder="Search Hero..."
          ref={input}
        />
        <button className="btn btn-outline-danger mb-5" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
