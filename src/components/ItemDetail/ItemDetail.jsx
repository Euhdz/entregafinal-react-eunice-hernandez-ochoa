import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, descripcion, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <img src={img} alt={nombre} />
      <h2>
        Id# {id}. {nombre}{" "}
      </h2>
      <h3> {descripcion}</h3>
      <h3 className="precio">Precio: ${precio} </h3>
      <p>Stock: {stock} </p>

      {agregarCantidad > 0 ? (
        <>
          <div className="boton-contenedor">
            <Link to="/.">
              <button type="button">Seguir Comprando</button>
            </Link>
            <Link to="/cart">
              <button type="button">Terminar Compra</button>
            </Link>
          </div>
        </>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
