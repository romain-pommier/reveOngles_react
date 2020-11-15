import React, { Component } from 'react';

class FormationRapide extends Component {
  data = [];
  render() {
    return (
      <div className="mt-5 mb-5">
        <h5>Apprenez à gagner du temps: Pose salon</h5>
        <div className="mt-5">
          <ul>
            <li>- Vous travaillerez sur vous.</li>
            <li>- Diverses techniques de poses rapides</li>
            <li>- Gainage</li>
            <li>- Full Cover</li>
            <li>- Pose de couleur</li>
            <li>- Babyboomer express</li>
            <li>- Pose de chablon </li>
            <li>- Comblage express</li>
            <li>- Déco express</li>
            <li>- Utilisation de la ponceuse</li>
            <li>- Savoir comment prendre les photos de vos réalisations</li>
          </ul>
        </div>
        <div className="mt-5" style={{ textDecorationLine: 'underline' }}>
          <h6>Niveau requis : formation de base.</h6>
        </div>
      </div>
    );
  }
}

export default FormationRapide;
