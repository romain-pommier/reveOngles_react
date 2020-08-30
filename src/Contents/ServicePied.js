import React from "react";
import { Row, Col } from 'react-bootstrap'
const ServicePied = () => {
    return (
        <div>
            <ul className="m-5">
                <li><Row><Col className="col-2"><h6>Renforcement gel</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>40 €</p></Col></Row></li>
                <li><Row><Col className="col-2"><h6>Vernis permanent</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>29 €</p></Col></Row></li>
                <li><Row><Col className="col-2"><h6>Vernis permanent renfort russe</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>39 €</p></Col></Row></li>
                <li><Row><Col className="col-2"><h6>Forfait mains et pieds</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>-10 %</p></Col></Row></li>
            </ul>
        </div >
    );
};

export default ServicePied;