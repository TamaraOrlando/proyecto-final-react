import "./navbar.css";
import CartWidget from "./CartWidget";
import logoTrvial from "../../assets/logoTrvial.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container navbar-container">
        <Link to="/" className="brand">
          <img src={logoTrvial} width={75} alt="" />
        </Link>
        <div className="nav-items">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link navlink-active' : 'nav-link'}>Inicio</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/categoria/serviciosdealquiler" className={({ isActive }) => isActive ? 'nav-link navlink-active' : 'nav-link'}>Servicios de alquiler</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/categoria/aridos" className={({ isActive }) => isActive ? 'nav-link navlink-active' : 'nav-link'}>Aridos</NavLink>
              </li>

              <li className="nav-item"> 
                <NavLink to="/categoria/movimientodesuelo" className={({ isActive }) => isActive ? 'nav-link navlink-active' : 'nav-link'}>Movimiento de suelo</NavLink>
              </li>

            </ul>
          </div>
        </div>
        <CartWidget/>
      </div>
    </nav>
  )
}

export default NavBar;