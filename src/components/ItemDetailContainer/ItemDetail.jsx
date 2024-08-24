import "./itemdetailcontainer.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador }

    console.log(productoCarrito)
  }

  return (
    <div className="detailProductContainer">
      <div>
        <img src={producto.imagen} alt="" className="detailImage" />
      </div>
      <div className="detailItemCount">
        <h2 className="detailName">{producto.nombre}</h2>
        <p className="detailText">{producto.descripcion}</p>
        <p className="detailPrice">${producto.precio}</p>
        <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
      </div>
    </div>
  );
};
export default ItemDetail;