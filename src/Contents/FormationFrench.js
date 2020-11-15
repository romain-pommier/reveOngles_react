import React, { Component } from 'react';

class FormationFrench extends Component {
  data = [];
  render() {
    return (
      <div className="mt-5 mb-5">
        <h5>
          Lors de cette formation, vous apprendrez à faire des french reverse
          parfaite (french pour incrustation paillettes ou autres).
        </h5>
        <div className="mt-5">
          <h5>Programme Technique : </h5>
          <ul>
            <li>- Revoir la préparation de l'ongle et les bases gel.</li>
            <li>
              - Approfondissement de la technique "pose complète" avec chablon
              (découpes et positionnement du chablon) et application du gel (
              C-Curve limage diamant etc..)
            </li>
            <li>
              - Maîtriser la French Reverse avec la création de la corniche.
            </li>
            <li>- Apprendre la technique "French reverse incrustation".</li>
          </ul>
        </div>
        <div className="mt-5" style={{ textDecorationLine: 'underline' }}>
          <h6>
            Niveau requis : une formation de base et mon Perfectionnement gel
            sont obligatoire pour accéder a cette formation
          </h6>
        </div>
      </div>
    );
  }
}

export default FormationFrench;
