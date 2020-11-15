import React, { Component } from 'react';

class FormationMini extends Component {
  data = [];
  render() {
    return (
      <div className="mt-5 mb-5">
        <h5>Coffin, amande</h5>
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

export default FormationMini;
