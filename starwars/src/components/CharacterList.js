import React, { useEffect, useState } from "react";

import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {

  const initialState = [];
  const [characters, setCharacters] = useState(initialState);

  const effectCallback = () => {

    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error));
  };

  useEffect(effectCallback, []);

  return (
    <div>
        {/* <CharacterCard character={characters} /> */}
      {characters.map(character => (
        <CharacterCard key={character.url} character={character} />
      ))}
    </div>
  );
};


export default CharacterList;
