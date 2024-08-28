import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./itemlistcontainer.css";

const Item = ({ producto }) => {
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  };

  const handleMouseLeave = () => {
    setHover(false)
  };

  const estiloCard = {
    transition: 'box-shadow 0.3s ease-in-out, background-color 0.3s ease-in-out',
    boxShadow: hover ? '0 8px 16px rgba(0, 0, 0, 0.8)' : '0 4px 8px rgba(0, 0, 0, 0.5)',
    margin: "20px 60px",
    backgroundColor: '#282828',
    textAlign: 'center',
  }

  const estiloImagen = {
    width: '100%',
    objectFit: 'cover',
    transition: 'filter 0.3s ease-in-out',
    filter: hover ? 'brightness(1.2)' : 'brightness(1)',
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={estiloCard}
      className="card"
    >
      <img className="cardImage" src={producto.imagen} alt="" style={estiloImagen} />
      <p className="cardName">{producto.nombre}</p>
      <p className="cardPrice"> ${producto.precio}</p>
      <Link className="cardDetails" to={"/detalle/" + producto.id}>
        Ver detalles
      </Link>
    </div>
  );
};
export default Item;
