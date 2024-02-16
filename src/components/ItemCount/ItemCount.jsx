import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };
  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="boton-contar-contenedor">
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
      </div>
      <div className="boton-agregar-contenedor">
        <button onClick={() => funcionAgregar(contador)}>
          {" "}
          Agregar al Carrito{" "}
        </button>
      </div>
    </>
  );
};

export default ItemCount;
