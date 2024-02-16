import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
      <Link to="/cart">
        <img
          className="imgCarrito"
          src="../img/shopping-cart-white.png"
          alt="shopping cart - Cart icon by icons8"
        />
        {cantidadTotal > 0 && (
          <strong className="cantCarrito"> {cantidadTotal} </strong>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
