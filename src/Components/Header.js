import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Image, Navbar, Nav } from "react-bootstrap"
import LogoReveongles from "../image/logo_reve_ongles.png"
import headerBackground1 from "../image/header3.jpg"
import headerBackground2 from "../image/foto-post-smalti.jpg"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundHeader:
                this.props.route === "/"
                    ? headerBackground1
                    : headerBackground2,
        }
    }

    onClickNavLink(targetName) {
        if (targetName === "formations") {
            return this.setState({
                backgroundHeader: headerBackground2,
            })
        }
        this.setState({
            backgroundHeader: headerBackground1,
        })
    }

    render() {
        return (
            <header
                id="accueil"
                style={{
                    backgroundImage: "url(" + this.state.backgroundHeader + ")",
                }}
            >
                <Navbar bg="transparent" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        className="justify-content-center"
                        id="basic-navbar-nav"
                    >
                        <Nav
                            variant="pills"
                            onClick={(e) => {
                                this.onClickNavLink(e.target.name)
                            }}
                        >
                            <Nav.Link name="prestations" href={"/#prestations"}>
                                Prestations
                            </Nav.Link>
                            <Nav.Link name="tarifs" href={"/#tarifs"}>
                                Tarifs
                            </Nav.Link>
                            <Link name="formations" to={"/formations"}>
                                Formation
                            </Link>
                            <Nav.Link
                                name="realisations"
                                href={"/#realisations"}
                            >
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
