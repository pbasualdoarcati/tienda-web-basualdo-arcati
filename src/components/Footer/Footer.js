// Components
import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

//Styles
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <Navbar bg="light" variant="light" expand="lg" className='footerNav' >
            <Nav className="navElement">
                <p>2022 © All rights reserved</p>
                <NavLink href="#link"> <LinkedInIcon /> </NavLink>
                <NavLink href="#link"> <GitHubIcon /> </NavLink>
            </Nav>
          </Navbar>
    </footer>
  )
}

export default Footer