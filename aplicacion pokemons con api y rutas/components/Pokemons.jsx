import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);//datos que tenemos que controlar

  useEffect(() => {//hace justo despues de renderizarse
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");//peticion a la api
    const pokemons = await data.json();//lo convierte a json
    setPokemons(pokemons['results']);//lo guarda en la varible de usestate, acceder a results dentro del json
  };
  return (
    <div className="container mt-4">
      <div className="row row-cols-2 row-cols-md-5">{/**cad pokemon del array, creamos una carta con la key y si url */}
        {pokemons.map((item, i) => (
          <Card key={i} PokeUrl={item.url}/>
        ))}
      </div>
    </div>
  );
}

export default Pokemons;