import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class PerfectFlag extends Component {
  render() {
    return (
      <Row className="perfect_flag p-2 p-sm-5 justify-content-around text-center">
        <Col className="m-auto perfect_header">
          <a style={{ color: 'white' }} href="/formations">
            <h3>Perfectionnez-vous !</h3>
          </a>
        </Col>
        <Col className="perfect_para m-auto p-sm-5 pt-5">
          <p>
            Vous souhaitez vous perfectionner dans le métier de prothésiste
            ongulaire. Je vous propose plusieurs formations afin d'apprendre
            absolument tout ce qu'il faut pour savoir être un(e) meilleur(e)
            prothésiste ongulaire.
          </p>
        </Col>
      </Row>
    );
  }
}
export default PerfectFlag;
