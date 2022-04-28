import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function NavBar(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="d-flex justify-content-between align-items-baseline">
          <Container  className="d-flex justify-content-between align-items-baseline">
            <Navbar.Brand href="#home">Mi Tienda Web de Basualdo Arcati</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto p-2 d-flex justify-content-between">
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default NavBar;