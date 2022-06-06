import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./detallePeli.css";

export const Detalles = () => {
  const { id } = useParams();

  const [detPels, setdetPels] = useState({});
  const datos = () => {
    fetch(`https://imdb-api.com/en/API/Title/k_4rlg4r6v/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setdetPels(data);
        console.log(data);
      });
  };
  useEffect(() => {
    datos();
  }, []);

  const { title, plot, image } = detPels;
  return (
    <div>
      <div className="container">
        <div className="img-container">
          <img className="DetImage" src={image} alt="" />
        </div>
        <div>
          <div className="DetTitulo">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
      <div className="descriptionMovie">
        <p>{plot}</p>
      </div>
    </div>
  );
};
