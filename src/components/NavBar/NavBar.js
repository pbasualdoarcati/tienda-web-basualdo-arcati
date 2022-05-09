//Components
import { useState } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import CartWidget from '../CarWidget/CartWidget'
import SearchButton from '../SearchButton/SearchButton'

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
                    <Nav.Link href="#home"  className="nav-link" aria-current="page" onClick={ () => showHamburger () }>Home</Nav.Link>
                  </li>
                  <li className="nav__menuHamburger--item">
                    <Nav.Link href="#action/3.1" className="nav-link" onClick={ () => showHamburger () }>Ropa de hombre</Nav.Link>
                  </li>
                  <li className="nav__menuHamburger--item">
                    <Nav.Link href="#action/3.2" className="nav-link" onClick={ () => showHamburger () }>Ropa de mujer</Nav.Link>
                  </li>
                  <li className="nav__menuHamburger--item">
                    <Nav.Link href="#action/3.3" className="nav-link" onClick={ () => showHamburger () }>Joyeria</Nav.Link>
                  </li>
                  <li className="nav__menuHamburger--item">
                    <Nav.Link href="#link" className="nav-link" onClick={ () => showHamburger () }>Tv</Nav.Link>
                  </li>
                  <li className="nav__menuHamburger--item">
                    <Nav.Link href="#link" className="nav-link" onClick={ () => showHamburger () }>Informatica</Nav.Link>
                  </li>
                  <li className="nav__menuHamburger--item">
                    <Nav.Link href="#link" className="nav-link" onClick={ () => showHamburger () }>GitHub</Nav.Link>
                  </li>
                </ul>
              </div>
              <button className="navbar-toggler" type="button" onClick={ () => showHamburger () }>
                        <span className="navbar-toggler-icon"></span>
              </button>

              <Navbar.Collapse id="menuCollapse" className="navLinks">
                <Nav className="navElement">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#action/3.1">Ropa de hombre</Nav.Link>
                  <Nav.Link href="#action/3.2">Ropa de mujer</Nav.Link>
                  <Nav.Link href="#action/3.3">Joyeria</Nav.Link>
                  <NavDropdown title="Más" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.4">Tv</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Informatica</NavDropdown.Item>
                  </NavDropdown>
                  <CartWidget cantItem ='Cantidad de items'/>
                  <SearchButton />
                </Nav>
              </Navbar.Collapse>
          </Navbar>

    )
}

export default NavBar;