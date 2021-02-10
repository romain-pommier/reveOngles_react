import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
class ServiceBeaute extends Component {
    data = [
        { id: 1, serviceName: 'Manucure combiné russe seul', price: '25 €' },
        { id: 2, serviceName: 'Avec Pose', price: '15 €' },
        { id: 3, serviceName: 'Manucure rapide', price: '10 €' },
        { id: 4, serviceName: 'Soin à la paraffine', price: '20 €' },
        { id: 4, serviceName: 'Forfait mains et pieds', price: '-10 %' },
    ]
    render() {
        return (
            <ul className="m-5">
                <React.Fragment>
                    {this.data.map((elem, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li key={elem.id}>
                                    <Row>
                                        <Col className="col-3">
                                            <h6>{elem.serviceName}</h6>
                                        </Col>
                                        <Col className="decoration_underline "></Col>
                                        <Col className="col-2">
                                            <p>{elem.price}</p>
                                        </Col>
                                    </Row>
                                </li>
                            </React.Fragment>
                        )
                    })}
                </React.Fragment>
            </ul>
        )
    }
}

export default ServiceBeaute
