import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img
          className="logo-header"
          src="../img/logo_tamales_gallo1.png"
          alt="Logo Tamales Gallo"
        />
      </Link>

      <Link className="navEstilo" to="/">
        <h1>Tamales Gallo</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="navEstilo" to="/categoria/Tamales">
              Tamales
            </NavLink>
          </li>

          <li>
            <NavLink className="navEstilo" to="/categoria/Atoles">
              Atoles
            </NavLink>
          </li>
          <li>
            <NavLink className="navEstilo" to="/categoria/Postres">
              Postres
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;
