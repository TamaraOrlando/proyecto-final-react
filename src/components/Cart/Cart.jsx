import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { LiaTrashAlt } from 'react-icons/lia';

import './cart.css';

const Cart = () => {
  const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="emptyCart">
        <h2>El carrito está vacío.</h2>
        <Link to="/" className="buttonEmptyCart">
          Ver más productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cartCart">
      <ul className="cartList">
        {carrito.map((productoCarrito) => (
          <li key={productoCarrito.id} className="cartItem">
            <img width={150} src={productoCarrito.imagen} alt="" />
            <p>{productoCarrito.nombre}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Precio c/u: ${productoCarrito.precio}</p>
            <p>Precio parcial: ${productoCarrito.cantidad * productoCarrito.precio} </p>
            <LiaTrashAlt size={30} color="white" onClick={() => borrarProducto(productoCarrito.id)} />
          </li>
        ))}
      </ul>

      <div className="cartControls">
        <h2 className="cartPrice">Precio Total: ${precioTotal()}</h2>
        <div className="buttons">
          <button className="buttonCart" onClick={vaciarCarrito}>
            <LiaTrashAlt size={25} color="white" />
            <p className="buttonCartText">Vaciar Carrito</p>
          </button>
          <Link className="buttonCart" to="/checkout">
            Continuar con mi compra
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
