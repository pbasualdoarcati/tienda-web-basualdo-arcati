//Components
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import CartWidget from '../CarWidget/CartWidget';
import SearchButton from '../SearchButton/SearchButton';

//Styles
import './NavBar.scss';


function NavBar(){
  const [click, setClick] = useState('')

  const showHamburger = () =>{
    if (click===''){
      setClick('is-active')
    }else{
      setClick('')
    }
  }


    return (
          <Navbar bg="light" variant="light" expand="lg" className="d-flex justify-content-between navBar" sticky="top">
              <Navbar.Brand><img src='images/LogoTienda.png' alt="Logo tienda" /></Navbar.Brand>
              <div className={`nav__menuHamburger  ${click}`}>
                <Button variant="light" className="nav__menuHamburger--close" type="button" onClick={ () => showHamburger ()}>
                  X
                </Button>
                <SearchButton />
                <ul className="nav__menuHamburgerNav">
                  <li className="nav__menuHamburger--item">
                  <NavLink to="/"  className="nav-link" aria-current="page" onClick={ () => showHamburger () }>Home</NavLink>
                  </li>
                  <li className="nav__menuHamburger--item">
                  <NavLink to="category/men's%20clothing"  className="nav-link" onClick={ () => showHamburger () }>Ropa de hombre</NavLink>
                  </li>
                  <li className="nav__menuHamburger--item">
                  <NavLink to="category/women's%20clothing" className="nav-link" onClick={ () => showHamburger () }>Ropa de mujer</NavLink>
                  </li>
                  <li className="nav__menuHamburger--item">
                  <NavLink to='category/jewelery' className="nav-link" onClick={ () => showHamburger () }>Joyeria</NavLink>
                  </li>
                  <li className="nav__menuHamburger--item">
                  <NavLink to='category/electronics' className="nav-link" onClick={ () => showHamburger () }>Electronica</NavLink>
                  </li>
                  <li className="nav__menuHamburger--item">
                  <NavLink to='https://github.com/pbasualdoarcati/tienda-web-basualdo-arcati' className="nav-link" onClick={ () => showHamburger () }>GitHub</NavLink>
                  </li>
                </ul>
              </div>
              <button className="navbar-toggler" type="button" onClick={ () => showHamburger () }>
                        <span className="navbar-toggler-icon"></span>
              </button>

              <Navbar.Collapse id="menuCollapse" className="navLinks">
                <Nav className="navElement">
                  <NavLink activeClassName="active" to='/' className="link">Home</NavLink>
                  <NavLink activeClassName="active" to="category/men's%20clothing"  className="link">Ropa de hombre</NavLink>
                  <NavLink activeClassName="active" to="category/women's%20clothing" className="link">Ropa de mujer</NavLink>
                  <NavLink activeClassName="active" to='category/jewelery' className="link">Joyeria</NavLink>
                  <NavLink activeClassName="active" to='category/electronics' className="link">Electronica</NavLink>
                  <CartWidget cantItem ='Cantidad de items'/>
                  <SearchButton />
                </Nav>
              </Navbar.Collapse>
          </Navbar>

    )
}

export default NavBar;