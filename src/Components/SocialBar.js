import React, { Component } from 'react'

class SocialBar extends Component {
    render() {
        return (
            <>
                <div
                    style={{ textAlign: 'center' }}
                    id="socialBar"
                    className="wrapper "
                >
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
            </>
        )
    }
}
export default SocialBar
