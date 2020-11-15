import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import IconFacebook from '../image/facebook_footer.png';
import IconInstagram from '../image/instagram_footer.png';

class SocialBar extends Component {
  render() {
    return (
      <div id="socialBar" className="p-2 ">
        <a href="https://www.facebook.com/revedonglesanne31">
          <Image className="icon_footer" src={IconFacebook}></Image>
        </a>
        <a href="https://www.instagram.com/revedongles/">
          <Image className="icon_footer" src={IconInstagram}></Image>
        </a>
      </div>
    );
  }
}
export default SocialBar;
