import React, { Component } from "react";

class ServiceFormation extends Component {
    data = [

        { id: 1, serviceName: "Formation intensif débutante gel 5 jours", price: "" },
        { id: 2, serviceName: "Perfectionnement", price: "" },
        { id: 3, serviceName: "Babyboomer et dégradé", price: "" },
        { id: 4, serviceName: "Manucure russe et vernis permanent renfort", price: "" },
        { id: 5, serviceName: "Acrygel", price: "" },
        { id: 6, serviceName: "Pose salon", price: "" },
        { id: 7, serviceName: "Forme salon (carré, cofin, amande)", price: "" },
        { id: 8, serviceName: "Remplissage express 30min", price: "" },
        { id: 9, serviceName: "Amande russe", price: "" },

    ]
    render() {
        return (

            <ul className="m-5 ">
                <h5 className="mb-5 text-center">Merci de me contacter pour toutes informations sur le contenu ou le tarif des formations proposé ci-dessous:</h5>
                <React.Fragment>
                    {this.data.map((elem, index) => {
                        return (

                            <React.Fragment key={index}>
                                <li key={elem.id} ><h6>{elem.serviceName}</h6></li>
                            </React.Fragment>

                        )
                    })}
                </React.Fragment>
            </ul >
        )
    }
};

export default ServiceFormation;