import React, { Component } from 'react';
import Accordion from './Accordion';
import FormationIntensive from '../Contents/FormationIntensive';
import FormationGel from '../Contents/FormationGel';
import FormationFrench from '../Contents/FormationFrench';
import FormationManucure from '../Contents/FormationManucure';
import FormationRapide from '../Contents/FormationRapide';
import FormationBaby from '../Contents/FormationBaby';
import FormationCoaching from '../Contents/FormationCoaching';
import FormationMini from '../Contents/FormationMini';

class Formation extends Component {
  data = [
    {
      id: 1,
      name: 'Formation intensive débutante, initiation Gel 5 jours',
      content: () => <FormationIntensive />,
      state: 'inactive',
    },
    {
      id: 2,
      name: 'Perfectionnement gel',
      content: () => <FormationGel />,
      state: 'inactive',
    },
    {
      id: 3,
      name: 'French reverse',
      content: () => <FormationFrench />,
      state: 'inactive',
    },
    {
      id: 4,
      name: 'Manucure russe et vernis permanent renfort',
      content: () => <FormationManucure />,
      state: 'inactive',
    },
    {
      id: 5,
      name: 'Pose salon rapide ',
      content: () => <FormationRapide />,
      state: 'inactive',
    },
    {
      id: 6,
      name: 'Babyboomer et dégradé',
      content: () => <FormationBaby />,
      state: 'inactive',
    },
    {
      id: 7,
      name: 'Coaching Privé',
      content: () => <FormationCoaching />,
      state: 'inactive',
    },
    {
      id: 8,
      name: 'Mini formes',
      content: () => <FormationMini />,
      state: 'inactive',
    },
  ];
  render() {
    return (
      <div id="tarifs" className="accordion_div">
        <h2 className="m-5 text-center">Formations</h2>
        <Accordion data={this.data}></Accordion>
      </div>
    );
  }
}
export default Formation;
