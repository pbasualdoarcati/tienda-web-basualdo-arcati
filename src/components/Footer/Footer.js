// //Elements and modules

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

//Styles

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Navbar bg="light" variant="light" expand="lg" className="footerNav" >
        <Nav className="navElement">
          <p>2022 © All rights reserved</p>
          <Link to="https://www.linkedin.com/in/pbasualdoarcati">
            <LinkedInIcon />
          </Link>
          <Link to="https://github.com/pbasualdoarcati/tienda-web-basualdo-arcati">
            <GitHubIcon />
          </Link>
        </Nav>
      </Navbar>
    </footer>
  );
}

export default Footer;
