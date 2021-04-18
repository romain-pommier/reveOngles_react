import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import LeftPicture from "../image/left_picture.jpg"
import RightPicture from "../image/right_picture.jpg"

class IntroDiv extends Component {
    render() {
        return (
            <Row className="div_intro" style={{ height: "100%" }}>
                <Col
                    className="d-none d-lg-block picture-intro"
                    style={{
                        backgroundImage: `url(${LeftPicture})`,
                    }}
                ></Col>
                <Col className="p-xl-4 col-md-6 intro-content">
                    <div>
                        <h3>Anne</h3>
                        <div>
                            <h6>Styliste ongulaire à Toulouse</h6>{" "}
                            <p className="text-center">
                                Moi c'est Anne votre{" "}
                                <span className="bold">
                                    prothésiste ongulaire à Labarthe-sur-lèze
                                </span>{" "}
                                jeune entrepreneuse. Je vous propose des
                                prestations de qualité pour la beauté de vos
                                mains et pieds. Technique russe manucure et
                                vernis permanent renfort sous cuticiules, gel,
                                vernis semi-permanent, remplissage, décoration
                                d'ongles fait à la main
                            </p>
                        </div>
                    </div>
                </Col>
                <Col
                    className="col-lg-3 d-none d-sm-block picture-intro"
                    style={{
                        backgroundImage: `url(${RightPicture})`,
                    }}
                ></Col>
            </Row>
        )
    }
}
export default IntroDiv
