import React from "react";
import { Row, Col } from 'react-bootstrap'
const ServiceMain = () => {
    return (
        <div>
            <ul>
                <h6 className="header_in_tarifs m-5 text-center">Gel</h6>
                <li><Row><Col className="col-4"><h6>Extension gel french (rallongement chablon)</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>59 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Extension gel couleur</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>61 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Renforcement gel transparent</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>40 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Renforcement gel /gum french</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>49 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Renforcement gel /gum couleur</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>51 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Remplissage gel/gum french</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>49 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Remplissage gel/gum couleur</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>51 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Pose artistique</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>Sur devis</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Ongle cassé (hors remplissage)</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>5 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Lors du remplissage</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>3,50 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Décoration (strass, stickers, dessin fait main 3D) sur devis à partir de</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>0,50 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Dépose</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>20 €</p></Col></Row></li>
                <h6 className="header_in_tarifs m-5 text-center">Vernis permanent</h6>
                <li><Row><Col className="col-4"><h6>Vernis permanent</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>40 €</p></Col></Row></li>
                <li><Row><Col className="col-4"><h6>Vernis permanent Renfort Russe</h6></Col><Col className="decoration_underline "></Col><Col className="col-2"><p>40 €</p></Col></Row></li>

            </ul>
        </div >
    );
};

export default ServiceMain;