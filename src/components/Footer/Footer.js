// //Elements and modules

import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

//Components
import { CartContext } from "../../context/CartContext";

//Styles

import "./Footer.scss";

function Footer() {
  const { theme } = useContext(CartContext);
  return (
    <footer className={theme}>
      <Navbar bg="light" variant="light" expand="lg" className="footerNav">
        <Nav className="navElement">
          <p>2022 © All rights reserved</p>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pbasualdoarcati"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/pbasualdoarcati/tienda-web-basualdo-arcati"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </Nav>
      </Navbar>
    </footer>
  );
}

export default Footer;
