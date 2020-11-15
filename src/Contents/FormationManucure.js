import React, { Component } from 'react';

class FormationManucure extends Component {
  data = [];
  render() {
    return (
      <div className="mt-5 mb-5">
        <h5>
          La manucure russe dégage le contour de l'ongle et agrandir la plaque,
          c'est un travail sur les cuticules en douceur, qui permet d'avoir de
          la netteté au niveau des cuticules et de gagner en repousse, pour un
          rendu parfait et soigné.
        </h5>
        <div className="mt-5">
          <ul>
            <li>- Théorie</li>
            <li>- Démo </li>
            <li>- Manucure Russe.</li>
            <li>- Vernis semi-permanent renforts sous cuticules.</li>
            <li>- Extension au vernis semi-permanent </li>
            <li>- Incrustation de strass </li>
            <li>- Prise de photo</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FormationManucure;
