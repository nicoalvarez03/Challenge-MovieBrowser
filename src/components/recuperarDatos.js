import React, { useState } from "react";
import VistaPeli from "./VerPelis";
import { FaSearch } from "react-icons/fa";

export const RecuperadorDatos = () => {
  const [pelis, setPelis] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const datos = (e) => {
    e.preventDefault();
    fetch(`https://imdb-api.com/en/API/Search/k_4rlg4r6v/${busqueda}`)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        console.log(data);
        setPelis(results);
      });
  };
  const cambiarState = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="">
      <form className="searchContainer" onSubmit={datos}>
        <div className="searchBox">
          <input
            className="searchInput"
            type="text"
            placeholder="buscar peliculas o series"
            onChange={cambiarState}
          />
          <button type="submit" className="searchButton">
            <FaSearch size={20} />
          </button>
        </div>
      </form>
      <div className="resultados">
        {pelis.length === 0 ? (
          <p className="NoRes">No se encuentran resultados a su busqueda</p>
        ) : (
          pelis.map((peli) => {
            return (
              <VistaPeli
                key={peli.id}
                id={peli.id}
                nombre={peli.title}
                imagen={peli.image}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
