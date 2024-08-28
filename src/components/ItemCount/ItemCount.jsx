import { useState } from "react";
import { toast } from 'react-toastify';

import "./itemcount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1)

  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(count);
    toast.success(`Se han agregado ${count} producto(s) correctamente al carrito`, {
      position: "top-right", 
      autoClose: 2000, 
    });
  }

  return (
    <div className="itemCountContainer">

      <div className="itemCountButtons">
        <button onClick={handleAgregarAlCarrito}className="itemCountButtonA">Agregar al carrito</button>
      </div>

      <div className="itemCountButtons">
        <button onClick={disminuir} className="itemCountButtonB">-</button>
        <p className="itemCountText">{count}</p>
        <button onClick={aumentar} className="itemCountButtonB">+</button>
      </div>

    </div>
  )
}
export default ItemCount;