import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  let title = "Pokemon React";

  return (
    <div className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <h1 className="text-white">{title}</h1>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#myList">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="myList">
            <div className="navbar-nav">
                <Link to="/" exact className="nav-link" activeClassName="active">Home</Link>
                <Link to="/pokemons" className="nav-link" activeClassName="active">Pokemons</Link>
                <Link to="/about" className="nav-link" activeClassName="active">About</Link>
            </div>
        </div>
      </div>
      <Outlet />
    </div>

  );
}

export default Navbar;