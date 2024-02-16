import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  return (
    <div className="cart-contenedor">
      <div className="prod-contenedor">
        <h3> {item.nombre} </h3>
        <p> Precio: $ {item.precio} </p>
        <p> Cantidad: {cantidad} </p>
      </div>
    </div>
  );
};

export default CartItem;
