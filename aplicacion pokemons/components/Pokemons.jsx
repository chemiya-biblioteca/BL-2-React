import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const pokemons = await data.json();
    setPokemons(pokemons['results']);
  };
  return (
    <div className="container mt-4">
      <div className="row row-cols-2 row-cols-md-5">
        {pokemons.map((item, i) => (
          <Card key={i} PokeUrl={item.url}/>
        ))}
      </div>
    </div>
  );
}

export default Pokemons;