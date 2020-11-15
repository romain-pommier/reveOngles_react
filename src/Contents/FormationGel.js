import React, { Component } from 'react';

class FormationGel extends Component {
  data = [];
  render() {
    return (
      <div className="mt-5 mb-5">
        <div>
          <h5>Au programme: </h5>
          <ul>
            <li>
              - Le bon découpage et positionnement du chablon pour avoir une
              jolie pose et tenue, forme salon, incrustation paillettes,
              couleur, french reverse, french full cover, ses proportions, le
              limage diamant, remplissage..
            </li>
          </ul>
        </div>
        <div className="mt-5" style={{ textDecorationLine: 'underline' }}>
          <h6>Niveau requis : formation de base</h6>
        </div>
      </div>
    );
  }
}

export default FormationGel;
