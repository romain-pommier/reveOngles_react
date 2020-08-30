import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap'
class ServiceMain extends Component {
    dataGel = [
        { id: 1, serviceName: "Extension gel french (rallongement chablon)", price: "59 €" },
        { id: 2, serviceName: "Extension gel couleur", price: "61 €" },
        { id: 3, serviceName: "Renforcement gel transparent", price: "40 €" },
        { id: 4, serviceName: "Renforcement gel /gum french", price: "49 €" },
        { id: 5, serviceName: "Renforcement gel /gum couleur", price: "51 €" },
        { id: 6, serviceName: "Remplissage gel/gum french", price: "49 €" },
        { id: 7, serviceName: "Remplissage gel/gum couleur", price: "51" },
        { id: 8, serviceName: "Pose artistique", price: "Sur devis" },
        { id: 9, serviceName: "Ongle cassé (hors remplissage)", price: "5 €" },
        { id: 10, serviceName: "Lors du remplissage", price: "3,50 €" },
        { id: 11, serviceName: "Décoration", price: "0,50 €" },
        { id: 12, serviceName: "Dépose", price: "20 €" },

    ]
    dataVernis = [
        { id: 1, serviceName: "Vernis permanent", price: "29 €" },
        { id: 2, serviceName: "Vernis permanent Renfort Russe", price: "39 €" }

    ]

    render() {
        return (
            <ul className="m-5">
                <React.Fragment>
                    <h6 className="header_in_tarifs m-5 text-center">Gel</h6>
                    {this.dataGel.map((elem, index) => {
                        return (

                            <React.Fragment key={index}>
                                <li key={elem.id} ><Row><Col className="col-2"><h6>{elem.serviceName}</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>{elem.price}</p></Col></Row></li>
                            </React.Fragment>

                        )
                    })}
                </React.Fragment>
                <React.Fragment>
                    <h6 className="header_in_tarifs m-5 text-center">Vernis permanent</h6>
                    {this.dataVernis.map((elem, index) => {
                        return (

                            <React.Fragment key={index}>
                                <li key={elem.id}  ><Row><Col className="col-2"><h6>{elem.serviceName}</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>{elem.price}</p></Col></Row></li>
                            </React.Fragment>

                        )
                    })}
                </React.Fragment>
            </ul >

        );
    }

}


export default ServiceMain;