import React, { Component } from "react"
import { Image } from "react-bootstrap"
import LogoReveongles from "../image/rsz_logo_reve_ongles.png"
import footerBackground1 from "../image/footer3.jpg"
import footerBackground2 from "../image/footer_background_wood.jpg"
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundHeader:
                props.route === "/" ? footerBackground1 : footerBackground2,
        }
    }
    render() {
        return (
            <footer
                id="footer"
                style={{
                    backgroundImage: "url(" + this.state.backgroundHeader + ")",
                }}
            >
                <div
                    className="first_div_footer mb-5"
                    style={{ color: "black" }}
                >
                    <Image className="logo_footer" src={LogoReveongles} fluid />
                    <div>
                        <h5>
                            Par Téléphone 07.66.30.46.52 <br />
                            Uniquement sur RDV du Lundi au Vendredi
                        </h5>
                        <h5 className="mt-5">
                            80 chemin des Agries 31860 Labarthe sur lèze
                        </h5>
                        <h5 className=" mt-5 text-center ">
                            Demande de renseignements, dates et inscriptions sur
                            ma page <br />
                            <a
                                className="mt-5"
                                style={{ color: "#212529" }}
                                href="https://www.facebook.com/revedonglesanne31"
                            >
                                Facebook: revedonglesanne31
                            </a>{" "}
                            <br />
                            ou par <br />
                            <a
                                style={{ color: "#212529" }}
                                href="mailto:revedonglesformation@gmail.com"
                            >
                                {" "}
                                Mail: revedonglesformation@gmail.com
                            </a>
                        </h5>
                    </div>
                </div>
                <ul className="link_menu_footer ">
                    <li>
                        <a href="/#tarifs">Tarifs</a>
                    </li>
                    <li>
                        <a href="/formations">Formations</a>
                    </li>
                    <li>
                        <a href="#realisations">Réalisations</a>
                    </li>
                </ul>
                <div className="wrapper icon_footer_group">
                    <ul>
                        <li className="facebook">
                            <a
                                href="https://www.facebook.com/revedonglesanne31"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className="fa fa-facebook fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li className="instagram">
                            <a
                                href="https://www.instagram.com/revedongles/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className="fa fa-instagram fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="p-2" style={{ color: "black" }}>
                    <h6>© 2020 Rêve d'ongles Anne POMMIER.</h6>
                    <a className="top_arrow" href="#accueil">
                        <i className="fa fa-angle-up"></i>
                    </a>
                </div>
            </footer>
        )
    }
}
export default Footer
