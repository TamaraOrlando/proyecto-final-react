import Item from "./Item";

import "./itemlistcontainer.css";

const ItemList = ({ productos }) => {
  return (
    <div className="listaProductos">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
export default ItemList;
