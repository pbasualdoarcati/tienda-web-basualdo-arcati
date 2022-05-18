//Elements and modules

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CarWidget/CartWidget";

//Components

import SearchButton from "../SearchButton/SearchButton";

//Styles

import "./NavBar.scss";

function NavBar() {
  const [click, setClick] = useState("");

  const showHamburger = () => {
    if (click === "") {
      setClick("is-active");
    } else {
      setClick("");
    }
  };

  let activeClassName = "active";
  let defaultClassName = "link";

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className="d-flex justify-content-between navBar"
      sticky="top"
    >
      <Link to="/">
        <Navbar.Brand>
          <img src="images/LogoTienda.png" alt="Logo tienda" />
        </Navbar.Brand>
      </Link>
      <div className={`nav__menuHamburger  ${click}`}>
        <Button
          variant="light"
          className="nav__menuHamburger--close"
          type="button"
          onClick={() => showHamburger()}
        >
          X
        </Button>
        <SearchButton />
        <ul className="nav__menuHamburgerNav">
          <li className="nav__menuHamburger--item">
            <NavLink
              to="/"
              className="nav-link"
              aria-current="page"
              onClick={() => showHamburger()}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/men's%20clothing"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Ropa de hombre
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/women's%20clothing"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Ropa de mujer
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/jewelery"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Joyeria
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/electronics"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Electronica
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="https://github.com/pbasualdoarcati/tienda-web-basualdo-arcati"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => showHamburger()}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Navbar.Collapse id="menuCollapse" className="navLinks">
        <Nav className="navElement">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/men's%20clothing"
          >
            Ropa de hombre
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/women's%20clothing"
          >
            Ropa de mujer
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/jewelery"
          >
            Joyeria
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/electronics"
          >
            Electronica
          </NavLink>
          <CartWidget cantItem="Cantidad de items" />
          <SearchButton />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
