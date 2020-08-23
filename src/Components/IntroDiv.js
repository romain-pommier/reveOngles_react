import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap'
import LeftPicture from "../image/left_picture.jpg"
import RightPicture from "../image/right_picture.jpg"

class IntroDiv extends Component {
    render() {
        return (


            <Row className="div_intro">
                <Col><Image src={LeftPicture} fluid ></Image></Col>
                <Col><h3>Anne</h3><div><h6>Styliste ongulaire à Toulouse</h6> <p className="text-center">Moi c'es Anne votre <span className="bold">prothésiste ongulaire à Labarthe-sur-lèze</span> jeune entrepreneuse. Je vous propose des prestations de qualité pour la beauté de vos mains et pieds. Technique russe manucure et vernis permanent renfort sous cuticiules, gel, vernis semi-permanent, remplissage, décoration d'ongles fait à la main</p></div></Col>
                <Col><Image src={RightPicture} fluid></Image></Col>
            </Row>


        )
    }
}
export default IntroDiv;