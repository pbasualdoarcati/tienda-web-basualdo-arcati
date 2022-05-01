//Styles
import './NavBar.scss';

//Components
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import LogoTienda from '../images/LogoTienda.png';
import IconCart from './IconCart'




function NavBar(){
    return (
          <Navbar bg="light" variant="light" expand="lg" className="d-flex justify-content-between navBar">
              <Navbar.Brand><img src={LogoTienda} alt="Logo tienda" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="navLinks">
                <Nav>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#action/3.1">Tv, Audio y Video</Nav.Link>
                  <Nav.Link href="#action/3.2">Celulares, Notebook y Tecnología</Nav.Link>
                  <Nav.Link href="#action/3.3">Electrodomésticos y Aires Ac.</Nav.Link>
                  <NavDropdown title="Más" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.4">Hogar, Muebles y Jardín</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Salud, Belleza y Fitness</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Bebés y Niños</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.7">Varios</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">GitHub</Nav.Link>
                  <IconCart/>
                </Nav>
              </Navbar.Collapse>
          </Navbar>

    )
}

export default NavBar;