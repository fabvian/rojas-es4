import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home"
import Publicaciones from "./components/Publicaciones"
import Imagenes from "./components/Imagenes"
import QuienesSomos from "./components/QuienesSomos"


const App = () => {
  return (

    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Publicaciones" element={<Publicaciones />} />
      <Route path="/Imagenes" element={<Imagenes />} />
      <Route path="/QuienesSomos" element={<QuienesSomos />} />
    </Routes>

  );
}

export default App;
