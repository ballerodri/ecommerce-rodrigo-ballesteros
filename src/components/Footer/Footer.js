import React from "react";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                    <img src="/robin.png" className="robinfooter" alt="..."/>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>TAMBIÉN ESTAMOS EN</h4>
                        <ui className="list-unstyled">
                            <a href="https://www.youtube.com/riverplate"
                                className="youtube social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/robinstoreok/"
                                className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com/robinstoreok/" 
                                className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/robinstoreok/"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <li>SEGUINOS PARA MAS NOVEDADES</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>UBICACIÓN</h4>
                        <ui className="list-unstyled">
                            <li>PILAR, BUENOS AIRES</li>
                            <li>TEL: 11 4566 5465</li>
                        </ui>
                    </div>                    
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} ROBINSTORE | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;