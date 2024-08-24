const productos = [
    {
      id: 1,
      nombre: "Alquiler de volquetes",
      descripcion: "Contenedores de 5m3 para limpieza. Contratación de 4 días.",
      precio: 60000,
      categoria: "serviciosdealquiler",
      stock: 5,
      imagen: "/img/volquetes.jpeg"
    },
    {
      id: 2,
      nombre: "Alquiler de maquinaria vial",
      descripcion: "Retroexcavadoras, minicargadoras, con o sin servicio de alquiler de camión volcador.",
      precio: 100000,
      categoria: "serviciosdealquiler",
      stock: 3,
      imagen: "/img/maquinaria.jpeg"
    },
    {
        id: 3,
        nombre: "Tierra fertilizada",
        descripcion: "Tierra negra fertilizada mezclada con compost.",
        precio: 50000,
        categoria: "aridos",
        stock: 6,
        imagen: "/img/tierrafertilizada.png"
      },
      {
        id: 4,
        nombre: "Tierra negra fina",
        descripcion: "Tierra negra fina ideal para parques.",
        precio: 30000,
        categoria: "aridos",
        stock: 8,
        imagen: "/img/tierranegrafina.png"
      },
      {
        id: 5,
        nombre: "Tosca",
        descripcion: "Tierra negra fina mezclada con cascotes",
        precio: 40000,
        categoria: "aridos",
        stock: 10,
        imagen: "/img/tosca.png"
      },
      {
        id: 6,
        nombre: "Podas, desmonte",
        descripcion: "Poda de arboleda y extracción de raíz.",
        precio: 60000,
        categoria: "movimientodesuelo",
        stock: 3,
        imagen: "/img/poda.jpeg"
      },
      {
        id: 7,
        nombre: "Demoliciones",
        descripcion: "Demolición con o sin retiro de escombros.",
        precio: 200000,
        categoria: "movimientodesuelo",
        stock: 4,
        imagen: "/img/demolicion.jpeg"
      },
      {
        id: 8,
        nombre: "Plateas",
        descripcion: "Excavacación de suelo vegetal (20cm), relleno con tosca, compactación y nivelación.",
        precio: 300000,
        categoria: "movimientodesuelo",
        stock: 1,
        imagen: "/img/platea.jpeg"
      },
      {
        id: 9,
        nombre: "Excavaciones",
        descripcion: "Excavación para piletas, sótanos, bases, plateas, zanjas y pilotines.",
        precio: 250000,
        categoria: "movimientodesuelo",
        stock: 2,
        imagen: "/img/excavacion.jpeg"
      }
  ]
  
  const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 1000);
    });
  };
  
  export default obtenerProductos