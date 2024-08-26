import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemlistcontainer.css";

const Item = ({ producto }) => {
  const [expandir, setExpandir] = useState(false)

  const handleMouseOver = () => {
    setExpandir(true)
  };

  const handleMouseLeave = () => {
    setExpandir(false)
  };

  const estiloCard = {
    transform: expandir ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out',
    margin: "20px 60px",
    backgroundColor: '#282828',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
  }

  const estiloImagen = {
    width: '100%',
    objectFit: 'cover',
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={ estiloCard }
      className={ expandir ? "cardExpandida" : "card" }
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
