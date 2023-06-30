import React, { useEffect, useState } from "react";
import CharItem from "../charItem/CharItem";

function CharList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      {characters.map((char) => {
        return (
          <>
            <CharItem
              name={char.name}
              img={char.img}
              description={char.description}
            />
          </>
        );
      })}
    </div>
  );
}

export default CharList;
