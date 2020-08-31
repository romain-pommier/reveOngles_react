import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'

class PerfectFlag extends Component {
    render() {
        return (
            <Row className="perfect_flag p-2 p-sm-5 justify-content-around text-center">
                <Col className="m-auto perfect_header"><h3>Perfectionnez-vous !</h3></Col>
                <Col className="perfect_para m-auto p-sm-5 pt-5" ><p>
                    Vous souhaitez vous perfectionner dans le metier de prothèsiste ongulaire ?
                    Cette formation est faite pour vous !
                    lors de cette formation vous apprendrez absolument tout ce qu'il vous faut pour savoir étre un(e) meilleur(e) prothésiste ongulaire.
                    </p>
                </Col>
            </Row>

        )
    }
}
export default PerfectFlag;