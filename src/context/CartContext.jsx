import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (productoNuevo) => {
    const condicion = estaEnElCarrito(productoNuevo.id);
    if (condicion) {
      const nuevoCarrito = carrito.map((productoCarrito) => {
        if (productoCarrito.id === productoNuevo.id) {
          return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + productoNuevo.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });

      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, productoNuevo]);
    }
  };

  const estaEnElCarrito = (idProducto) => {
    const condicional = carrito.some((productoCarrito) => productoCarrito.id === idProducto);
    return condicional;
  };

  const cantidadTotal = () => {
    const totalProductos = carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0);
    return totalProductos;
  };

  const precioTotal = () => {
    const precio = carrito.reduce(
      (total, productoCarrito) => total + productoCarrito.cantidad * productoCarrito.precio,
      0
    );
    return precio;
  };

  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter((productoCarrito) => productoCarrito.id !== idProducto);
    setCarrito(productosFiltrados);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        cantidadTotal,
        precioTotal,
        borrarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };