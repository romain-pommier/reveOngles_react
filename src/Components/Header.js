import React, { Component } from 'react'
import { Image, Navbar, Nav } from 'react-bootstrap'
import LogoReveongles from '../image/logo_reve_ongles.png'
import headerBackground1 from '../image/header3.jpg'
import headerBackground2 from '../image/foto-post-smalti.jpg'
import { Link, Route } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundHeader:
                props.route === '/' ? headerBackground1 : headerBackground2,
        }
    }

    render() {
        return (
            <header
                id="accueil"
                style={{
                    backgroundImage: 'url(' + this.state.backgroundHeader + ')',
                }}
            >
                <Navbar bg="transparent " expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        className="justify-content-center"
                        id="basic-navbar-nav"
                    >
                        <Nav variant="pills">
                            <Nav.Link href="/#prestations">
                                Prestations
                            </Nav.Link>
                            <Nav.Link href="/#tarifs">Tarifs</Nav.Link>
                            {/* <Route path=""></Route> */}
                            <Link to="/formations"></Link>
                            {/* <Nav.Link href="/formations">Formations</Nav.Link> */}
                            <Nav.Link href="/#realisations">
                                Réalisations
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Image
                    className="logo_header"
                    src={LogoReveongles}
                    fluid
                ></Image>
            </header>
        )
    }
}
export default Header
