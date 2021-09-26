import React, { Component } from "react"
import Accordion from "./Accordion"
import FormationIntensive from "../Contents/FormationIntensive"
import MalLogo from "../image/mal_logo.png"
import MentalLogo from "../image/mental_logo.png"
import FormationGel from "../Contents/FormationGel"
import FormationFrench from "../Contents/FormationFrench"
import FormationManucure from "../Contents/FormationManucure"
import FormationRapide from "../Contents/FormationRapide"
import FormationBaby from "../Contents/FormationBaby"
import FormationCoaching from "../Contents/FormationCoaching"
import FormationMini from "../Contents/FormationMini"

class Formation extends Component {
    data = [
        {
            id: 1,
            name: "Formation intensive débutante, initiation Gel 5 jours",
            content: () => <FormationIntensive />,
            state: "inactive",
        },
        // {
        //     id: 2,
        //     name: "Perfectionnement gel",
        //     content: () => <FormationGel />,
        //     state: "inactive",
        // },
        // {
        //     id: 3,
        //     name: "French reverse",
        //     content: () => <FormationFrench />,
        //     state: "inactive",
        // },
        // {
        //     id: 4,
        //     name: "Manucure russe et vernis permanent renfort",
        //     content: () => <FormationManucure />,
        //     state: "inactive",
        // },
        // {
        //     id: 5,
        //     name: "Pose salon rapide ",
        //     content: () => <FormationRapide />,
        //     state: "inactive",
        // },
        // {
        //     id: 6,
        //     name: "Babyboomer et dégradé",
        //     content: () => <FormationBaby />,
        //     state: "inactive",
        // },
        // {
        //     id: 7,
        //     name: "Coaching Privé",
        //     content: () => <FormationCoaching />,
        //     state: "inactive",
        // },
        // {
        //     id: 8,
        //     name: "Mini formes",
        //     content: () => <FormationMini />,
        //     state: "inactive",
        // },
    ]
    render() {
        return (
            <div id="tarifs" className="accordion_div">
                <h2 className="m-5 text-center">Formations</h2>
                <p style={{ paddingRight: "20%", paddingLeft: "20%" }}>
                    Rêve d’ongles est un centre de formation dédié à
                    l'enseignement des techniques de pose d'ongle. Formatrice
                    depuis plus de 4 ans et prise de passion pour les ongles,
                    les formations se sont enchainées (j'en possède plus de
                    quarante-cinq aujourd'hui !).
                </p>{" "}
                <p style={{ paddingRight: "20%", paddingLeft: "20%" }}>
                    Anne technicienne d'ongles, ambassadrice de la marque Nails
                    company, formatrice et gagnante de concours internationaux,
                    je vous accueille dans son centre située à Labarthe sur Lèze
                    à 20min de Toulouse.
                </p>
                <p style={{ paddingRight: "20%", paddingLeft: "20%" }}>
                    Vous apprendrez notamment à maîtriser la pose d’ongles en
                    gel, remplissage gel, perfectionnement gel, acrylique,
                    acrygel et Nail art etc..
                </p>{" "}
                <p
                    className="mb-5"
                    style={{ paddingRight: "20%", paddingLeft: "20%" }}
                >
                    Apprenez un nouveau métier et devenez Styliste/Prothésiste
                    ongulaire ou Perfectionnez-vous ! L'envie de toujours avoir
                    envie d'apprendre et d'évoluer et vous ?
                </p>
                <Accordion data={this.data}></Accordion>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginTop: "5%",
                    }}
                >
                    <img src={MalLogo} height="100" width="100" />
                    <img src={MentalLogo} height="100" width="100" />
                </div>
                <p className="text-center mt-5">
                    Demande de renseignements, dates et inscriptions sur ma page{" "}
                    <a
                        style={{ color: "#212529" }}
                        href="https://www.facebook.com/revedonglesanne31"
                    >
                        Facebook: revedonglesanne31
                    </a>{" "}
                    ou par{" "}
                    <a
                        style={{ color: "#212529" }}
                        href="mailto:revedonglesformation@gmail.com"
                    >
                        {" "}
                        Mail: revedonglesformation@gmail.com
                    </a>
                </p>
            </div>
        )
    }
}
export default Formation
