import React, { Component } from 'react';
import { Image, Navbar, Nav } from 'react-bootstrap'
import imageBackground from "../image/header_image3.jpg"

class Header extends Component {
    render() {
        return (

            <header>
                <Image src={imageBackground} fluid></Image>
                <Navbar fixed="top" bg="transparent " expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                        <Nav variant="pills">
                            <Nav.Link href="#home">Accueil</Nav.Link>
                            <Nav.Link href="#prestations">Prestations</Nav.Link>
                            <Nav.Link href="#tarifs">Taris</Nav.Link>
                            <Nav.Link href="#realisations">Réalisation</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </header >
        )
    }
}
export default Header;