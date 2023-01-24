import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Card(message) {//recibimos un mensaje como parametro

  const [name, setName] = useState('');//variables que tenemos que controlar
  const [image, setImage] = useState('');
  const [id, setId] = useState('');

  const getPokemon = async (url) => {//llega el url
    const data = await fetch(url);//busco en la url
    const pokemon = await data.json();//convierto a json
    setName(pokemon.name);//asigno los campos a las variables
    setImage(pokemon.sprites['front_default']);
    setId(pokemon.id);
  }

  useEffect(()=>{//nada mas renderizarse, busco el pokemon, cogiendo la url que me pasa
    getPokemon(message.PokeUrl);
  }, [])

  return (
    <div className="col mb-4">
      <div className="card h-100">
        <img src="" alt="" />
        <div className="card-body">
          <img className="col" src={image} alt=""/>{/**enlazo con las variables para mostrar los datos */}
          <h5 className="card-title text-center">{name}</h5>{/**link a la ruta pasando el id */}
          <Link to={`/pokemon/${id}`} className="btn btn-warning btn-block">See more</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;