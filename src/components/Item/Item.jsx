import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, img }) => {
  return (
    <div className="card-producto-contenedor">
      <div className="cardProducto">
        <img src={img} alt={nombre} />
        <div className="card-producto-nombre">
          <h3>{nombre} </h3>
        </div>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
      </div>
    </div>
  );
};

export default Item;
