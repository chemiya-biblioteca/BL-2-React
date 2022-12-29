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
    
    <BrowserRouter>
    <Navbar/>
      <Routes>

          <Route index element={<Home />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="about" element={<About />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;