import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
  const { id } = useParams();//para acceder a los parametros de la ruta
  const [name, setName] = useState("");//creamos las variables que tendremos que controlar
  const [image, setImage] = useState("");
  const [baseExperience, setBExperience] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {//nada mas renderizarse
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);//buscamos en la api el pokemon concreto
    const pokemon = await data.json();//lo convertimos a json
    setName(pokemon.name);//asignamos los campos de sus variables
    setImage(pokemon.sprites.front_default);
    setBExperience(pokemon.base_experience);
    setHeight(pokemon.height);
    setWeight(pokemon.weight);
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <img className="col" src={image} alt=""/>{/**enlazamos con la variable de la imagen */}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item active">{name}</li>{/**enlazamos con las demas variables */}
                <li className="list-group-item">
                  <strong>Id:</strong> {id}
                </li>
                <li className="list-group-item">
                  <strong>Base Experience:</strong> {baseExperience}
                </li>
                <li className="list-group-item">
                  <strong>Height:</strong> {height}
                </li>
                <li className="list-group-item">
                  <strong>Weight:</strong> {weight}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pokemon;