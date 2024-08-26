import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css"
import { ClimbingBoxLoader } from 'react-spinners';
import {
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';
import db from '../../database/database.js';

const ItemListContainer = ({ bienvenida }) => { const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);
  const { idCategoria } = useParams();

  const getProducts = async () => {
    try {
      const productosRef = collection(db, 'productos');
      const dataDb = await getDocs(productosRef);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      setEstaCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const productosRef = collection(db, 'productos');
      const q = query(
        productosRef,
        where('categoria', '==', idCategoria)
      );
      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });

      setProductos(data);
      setEstaCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setEstaCargando(true);
    if (idCategoria) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategoria]);


  // const [productos, setProductos] = useState([]);
  // const { idCategoria } = useParams();

  // useEffect(() => {
  //   obtenerProductos()
  //     .then((respuesta) => {
  //       if (idCategoria) {
  //         const productosFiltrados = respuesta.filter( (producto)=> producto.categoria === idCategoria)
  //         setProductos(productosFiltrados)
  //       } else {
  //         setProductos(respuesta);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       console.log("Finalizo la promesa");
  //     });
  // }, [idCategoria]);

  return (
    <div>
      <p className="bienvenidaContainer">{bienvenida}</p>
      {estaCargando ? (
        <div>
          <ClimbingBoxLoader color="white" />
        </div>
      ) : (
        <ItemList productos={productos} />
      )}

      {/* <ItemList productos={productos} /> */}
    </div>
  );
};
export default ItemListContainer;


