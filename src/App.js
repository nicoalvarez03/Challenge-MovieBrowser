import React from "react";
import { Route, Routes } from "react-router";
import Menu from "./components/Nav"
import { RecuperadorDatos } from "./components/recuperarDatos";
import { Detalles } from "./Pages/detallePeli";



function App() {

  return (
    <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<RecuperadorDatos/>}/>
          <Route path="/:id" element={<Detalles/>}/>

        </Routes>
    </div>
  );
}

export default App;
