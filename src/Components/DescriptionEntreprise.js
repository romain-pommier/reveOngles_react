import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap'
import NailPolish from "../image/nail-polish.png"
import LogoReveongles from "../image/logo_reve_ongles.png"
import LogoBush from "../image/bush_icon.png"
import LogoStar from "../image/star_icon4.png"
import LogoPhone from "../image/phone_icon.png"

class DescriptionEntreprise extends Component {
    render() {
        return (
            <Row id="prestations" className="description_div">
                <div >
                    <Col className="mt-5 pt-5" >
                        <div className=" d-flex justify-content-center">
                            < Image className="nail_polish" src={NailPolish} fluid></Image >
                        </div>
                        <div className=" pt-5 d-flex justify-content-center">
                            <Image className=" description_logo" src={LogoReveongles} fluid></Image>
                        </div>
                        <p className="pt-5 text-center description_text">
                            Je suis Anne votre prothésiste ongulaire et formatrice. <br />
                            Les ongles sont pour moi une vériatble passion depuis des années. <br />
                            Mes expériences: Diplôme CAP esthétique ainsi que 38 certificats d'ongles à mon actif, concours, formatrice en France, salon d'ongles en France avec la marque avec laquelle je travail.
                    </p>
                        <h2 className="description_header">Prothésiste ongulaire à Labarthe-sur-Lèze</h2>
                        <p className="pt-5 text-center description_text">
                            Je mets un point d'honneur à vous écouter, au moment de la prise de rendez-vous et tout au long de votre prestation.
                            De cette façon, je peux vous conseiller et vous accompagner dans le choix de la technique
                            (extension en gel, remplissage vernis semi-permanent, nail art, pose artistiques) sur rendez-vous.
                    </p>
                    </Col>
                </div >
                <div className="w-100 mb-5 py-5">
                    <Row className="justify-content-center">
                        <Col className="text-center"><div className="text-center"><Image src={LogoBush} fluid ></Image></div><h6>Préstastions</h6></Col>
                        <Col className="text-center"><div className="text-center"><Image src={LogoStar} fluid ></Image></div><h6 className="text-center">Tarifs</h6></Col>
                        <Col className="text-center"><div className="text-center"><Image src={LogoPhone} fluid ></Image></div><h6>Contact</h6></Col>
                    </Row>
                </div>
            </Row>
        )
    }
}
export default DescriptionEntreprise;