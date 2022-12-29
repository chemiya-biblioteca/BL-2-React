import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Card(message) {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('');

  const getPokemon = async (url) => {
    const data = await fetch(url);
    const pokemon = await data.json();
    setName(pokemon.name);
    setImage(pokemon.sprites['front_default']);
    setId(pokemon.id);
  }

  useEffect(()=>{
    getPokemon(message.PokeUrl);
  }, [])

  return (
    <div className="col mb-4">
      <div className="card h-100">
        <img src="" alt="" />
        <div className="card-body">
          <img className="col" src={image} alt=""/>
          <h5 className="card-title text-center">{name}</h5>
          <Link to={`/pokemon/${id}`} className="btn btn-warning btn-block">See more</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;