import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal, eliminarProducto } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className="cart-contenedor">
        <h2>No hay productos en el carrito</h2>
        <Link to="/"> Ver Productos </Link>
      </div>
    );
  }

  return (
    <div className="cart-contenedor">
      <div className="prod-contenedor">
        {carrito.map((prod) => (
          <div className="cart-prods" key={prod.id}>
            {" "}
            <CartItem {...prod} />
            <button onClick={() => eliminarProducto(prod.item.id)}>
              {" "}
              Eliminar Producto{" "}
            </button>
            <hr />
          </div>
        ))}

        <h3> Total: $ {total} </h3>

        <div className="boton-contenedor">
          <button onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
          <Link to="/.">
            <button type="button" className="btn btn-info">
              Seguir Comprando
            </button>
          </Link>
          <Link to="/checkout">
            <button type="button" className="finalizar-compra">
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
