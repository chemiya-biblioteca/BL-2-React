import React from 'react';
import { Link } from "react-router-dom";

function Home() {

    let title = "Pokemon React"

    return(
        <div className="container mt-4">
            <div className="jumbotron">
                <h1 className="display-4">{title}</h1>
                <p className="lead">Aplicacion de pokemons con react</p>
                <hr className="my-4"/>
                <Link to="/pokemons" className="btn btn-warning btn-lg">Ver pokemons</Link>
            </div>
        </div>
    )
}

export default Home;