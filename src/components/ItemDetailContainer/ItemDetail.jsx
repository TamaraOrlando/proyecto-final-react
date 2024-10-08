import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

import ItemCount from "../ItemCount/ItemCount";

import "./itemdetailcontainer.css";

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };

    agregarProducto(productoCarrito);

    setMostrarItemCount(false);
  };

  return (
    <div className="detailProductContainer">
      <div>
        <img src={producto.imagen} alt={producto.nombre} className="detailImage" />
      </div>
      <div className="detailItemCount">
        <h2 className="detailName">{producto.nombre}</h2>
        <p className="detailText">{producto.descripcion}</p>
        <p className="detailPrice">${producto.precio}</p>
        {mostrarItemCount ? (
          <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
        ) : (
          <Link to="/cart" className="buttonDetail">
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
};
export default ItemDetail;