import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pokemons from "./components/Pokemons";
import Pokemon from "./components/Pokemon";
import About from "./components/About";


function App() {
  return (
    <div>
    {/*para manejar las rutas, ponemos el camino y el elemento al que dirigen */}
    <BrowserRouter>
    <Navbar/>
      <Routes>

          <Route index element={<Home />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="about" element={<About />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />{/**parametro con el id */}
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;