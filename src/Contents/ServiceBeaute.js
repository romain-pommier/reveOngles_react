import React from "react";
import { Row, Col } from 'react-bootstrap'
const ServiceBeaute = () => {
    return (
        <div>
            <ul className="m-5">
                <li><Row><Col className="col-2"><h6>Manucure combiné russe seul</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>25 €</p></Col></Row></li>
                <li><Row><Col className="col-2"><h6>Avec Pose</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>15 €</p></Col></Row></li>
                <li><Row><Col className="col-2"><h6>Manucure rapide</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>10 €</p></Col></Row></li>
                <li><Row><Col className="col-2"><h6>Soin à la paraffine</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>20 €</p></Col></Row></li>

            </ul>
        </div >
    );
};

export default ServiceBeaute;