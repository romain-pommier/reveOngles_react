import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import LogoReveongles from '../image/logo_reve_ongles.png';
import IconFacebook from '../image/facebook_footer.png';
import IconInstagram from '../image/instagram_footer.png';
import IconEmail from '../image/email2.png';
import footerBackground1 from '../image/footer3.jpg';
// import footerBackground2 from '../image/nailFooter.jpg';
import footerBackground2 from '../image/footer_background_wood.jpg';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundHeader:
                props.route === '/' ? footerBackground1 : footerBackground2,
        };
    }
    render() {
        return (
            <footer
                id="footer"
                style={{
                    backgroundImage: 'url(' + this.state.backgroundHeader + ')',
                }}
            >
                <div
                    className="first_div_footer mb-5"
                    style={{ color: 'black' }}
                >
                    <Image
                        className="logo_footer"
                        src={LogoReveongles}
                        fluid
                    ></Image>
                    <h4>
                        Email:{' '}
                        <a
                            href="mailto:anneesthetique31@gmail.com"
                            style={{ color: 'black' }}
                        >
                            anneesthetique31@gmail.com
                        </a>
                    </h4>
                    <h4>80 chemin des agnies 31860 Labarthe sur lèze</h4>
                </div>
                <ul className="link_menu_footer">
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
                <div class="wrapper">
                    <ul>
                        <li class="facebook">
                            <a href="#">
                                <i
                                    class="fa fa-facebook fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li class="twitter">
                            <a href="#">
                                <i
                                    class="fa fa-twitter fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li class="instagram">
                            <a href="#">
                                <i
                                    class="fa fa-instagram fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li class="google">
                            <a href="#">
                                <i
                                    class="fa fa-envelope fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li class="whatsapp">
                            <a href="#">
                                <i
                                    class="fa fa-whatsapp fa-2x"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="p-5 icon_footer_group ">
                    <a href="https://www.facebook.com/revedonglesanne31">
                        <Image
                            className="icon_footer"
                            src={IconFacebook}
                        ></Image>
                    </a>
                    <a href="https://www.instagram.com/revedongles/">
                        <Image
                            className="icon_footer"
                            src={IconInstagram}
                        ></Image>
                    </a>

                    {/* <ul className="soc">
                    <li>
                        <a class="icon-8 email" href="#" title="Email">
                            <div class="ir">
                                <svg
                                    viewbox="0 0 512 512"
                                    preserveAspectRatio="xMidYMid meet"
                                    width="512"
                                    height="512"
                                >
                                    <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
                                </svg>
                            </div>
                        </a>
                    </li>
                </ul> */}
                </div>

                <div className="p-2" style={{ color: 'black' }}>
                    <h6>© 2020 Rêve d'ongles Anne POMMIER.</h6>
                    <a className="top_arrow" href="#accueil">
                        <i className="fa fa-angle-up"></i>
                    </a>
                </div>
            </footer>
        );
    }
}
export default Footer;
