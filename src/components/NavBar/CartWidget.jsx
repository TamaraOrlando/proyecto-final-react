import { ImCart } from "react-icons/im";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal();

    return (
      <Link to="/cart" className="cartwidget">
        <ImCart size={30} className="cart"/>
        <p>{cantidad > 0 && cantidad}</p>
      </Link>
    )
  }
  export default CartWidget;