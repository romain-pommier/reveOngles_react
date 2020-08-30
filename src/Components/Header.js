import React, { Component } from 'react';
import { Image, Navbar, Nav } from 'react-bootstrap'
import LogoReveongles from "../image/logo_reve_ongles.png"

class Header extends Component {
    render() {
        return (


            <header id="accueil">
                <Navbar bg="transparent " expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                        <Nav variant="pills">
                            <Nav.Link href="#prestations">Prestations</Nav.Link>
                            <Nav.Link href="#tarifs">Tarifs</Nav.Link>
                            <Nav.Link href="#realisations">Réalisation</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Image className="logo_header" src={LogoReveongles} fluid></Image>
            </header >
        )
    }
}
export default Header;