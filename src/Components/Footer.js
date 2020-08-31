import React, { Component } from 'react';
import { Image } from 'react-bootstrap'
import LogoReveongles from "../image/logo_reve_ongles.png"
import IconFacebook from '../image/facebook_footer.png'
import IconInstagram from '../image/instagram_footer.png'

class Footer extends Component {
    render() {
        return (

            <footer>
                <div className="first_div_footer mb-5">
                    <Image className="logo_footer" src={LogoReveongles} fluid></Image>
                </div>

                <div className="p-5 icon_footer_group">
                    <a href="https://www.facebook.com/revedonglesanne31"><Image className="icon_footer" src={IconFacebook} ></Image></a>
                    <a href="https://www.instagram.com/revedongles/"><Image className="icon_footer" src={IconInstagram} ></Image></a>
                </div>

                <div className="p-2">
                    <h4>© 2020 Rêve d'ongles Anne POMMIER.</h4>
                    <a className="top_arrow" href="#accueil"><i className="fa fa-angle-up"></i></a>
                </div>
            </footer>
        )
    }
}
export default Footer;