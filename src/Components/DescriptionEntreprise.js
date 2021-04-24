import React, { Component } from "react"
import { Image, Row, Col } from "react-bootstrap"
import NailPolish from "../image/nail-polish3.png"
import LogoReveongles from "../image/logo_reve_ongles.png"
import LogoBush from "../image/bush_icon3.png"
import LogoStar from "../image/star_icon3.png"
import LogoPhone from "../image/phone_icon3.png"

class DescriptionEntreprise extends Component {
    render() {
        return (
            <Row id="prestations" className="description_div">
                <div>
                    <Col className="mt-5 pt-5">
                        <div className=" d-flex justify-content-center">
                            <Image
                                className="nail_polish"
                                src={NailPolish}
                                fluid
                            ></Image>
                        </div>
                        <div className=" pt-5 d-flex justify-content-center">
                            <Image
                                className=" description_logo"
                                src={LogoReveongles}
                                fluid
                            ></Image>
                        </div>
                        <h2 className="description_header">
                            Salon de manucure et centre de formation
                        </h2>
                        <p className="pt-5 text-center description_text">
                            Je suis Anne votre prothésiste ongulaire et
                            formatrice. <br />
                            Les ongles sont pour moi une vériatble passion
                            depuis des années. <br />
                            Mes expériences: Diplôme CAP esthétique ainsi que 38
                            certificats d'ongles à mon actif, concours,
                            formatrice en France, salon d'ongles en France avec
                            la marque avec laquelle je travaille.
                        </p>
                        <h2 className="description_header">
                            Prothésiste ongulaire à Labarthe-sur-Lèze
                        </h2>
                        <p className="pt-5 text-center description_text">
                            Je mets un point d'honneur à vous écouter, au moment
                            de la prise de rendez-vous et tout au long de votre
                            prestation. De cette façon, je peux vous conseiller
                            et vous accompagner dans le choix de la technique
                            (extension en gel, remplissage vernis
                            semi-permanent, nail art, pose artistique) sur
                            rendez-vous.
                        </p>
                    </Col>
                </div>
                <div className="w-100 mb-5 py-5">
                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <a href="#realisations">
                                <div className="text-center">
                                    <Image src={LogoBush} fluid></Image>
                                </div>
                                <h6 style={{ color: "black" }}>Préstations</h6>
                            </a>
                        </Col>
                        <Col className="text-center">
                            <a href="#tarifs">
                                <div className="text-center">
                                    <Image src={LogoStar} fluid></Image>
                                </div>
                                <h6
                                    style={{ color: "black" }}
                                    className="text-center"
                                >
                                    Tarifs
                                </h6>
                            </a>
                        </Col>
                        <Col className="text-center">
                            <a href="#footer">
                                <div className="text-center">
                                    <Image src={LogoPhone} fluid></Image>
                                </div>
                                <h6 style={{ color: "black" }}>Contact</h6>
                            </a>
                        </Col>
                    </Row>
                </div>
            </Row>
        )
    }
}
export default DescriptionEntreprise
