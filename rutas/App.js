import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//npm install -S react-router-dom

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {//pongo las rutas
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>{/**arriba siempre estan los enalces que tiene layout */}
          <Route index element={<Home />} />{/**es la que se muestra al inicio */}
          <Route path="blogs" element={<Blogs />} />{/**se va cambiando la parte de abajo: la lista de arriba de layout siempre y abajo la palabra de la pagina cocreta */}
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
