import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
class ServicePied extends Component {
    data = [
        { id: 1, serviceName: "Renforcement gel", price: "40 €" },
        { id: 2, serviceName: "Vernis permanent", price: "29 €" },
        { id: 3, serviceName: "Vernis permanent renfort russe", price: "39 €" },
        { id: 4, serviceName: "Forfait mains et pieds", price: "-10 %" },
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

export default ServicePied
