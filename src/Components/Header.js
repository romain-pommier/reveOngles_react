import React, { Component } from 'react';
import { Image, Navbar, Nav } from 'react-bootstrap'
// import imageBackground from "../image/header_background.jpg"
import LogoReveongles from "../image/logo_reve_ongles.png"
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

class Header extends Component {
    render() {
        return (


            <header >
                {/* <ParallaxProvider>
                    <Parallax className="custom-class" y={[-60, 20]} tagOuter="figure">
                        <Image className="background_header" src={imageBackground} ></Image>
                    </Parallax>
                </ParallaxProvider> */}

                <Navbar bg="transparent " expand="lg">
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
                <Image className="logo_header" src={LogoReveongles} fluid></Image>
            </header >
        )
    }
}
export default Header;