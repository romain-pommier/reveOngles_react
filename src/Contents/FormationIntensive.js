import React, { Component } from 'react';

class FormationIntensive extends Component {
  data = [];
  render() {
    return (
      <div className="mt-5 mb-5">
        <div>
          <h5>Détails: </h5>
          <ul>
            <li>
              - Formation initiation 5 jours en petit groupe pour mieux
              apprendre et vous suivre. 35H
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h5>Objectif: </h5>
          <ul>
            <li>
              - Vous faire découvrir le métier de Prothésiste Ongulaire et ses
              techniques
            </li>
            <li>
              - Formation destinée aux personnes qui souhaitent se former pour
              exercer le métier de celui-ci à leur compte, ou en institut etc..
            </li>
            <li>
              - Certificat reconnue par la Chambre Des Métiers à l’issue de la
              formation.
            </li>
            <li>
              - Matériel est mis à votre disposition pendant la formation et je
              m'occupe de trouver les modèles.{' '}
            </li>
            <li>
              - Cette formation vous permet de devenir Prothésiste Ongulaire et
              de proposer à votre clientèle les prestations, mais je vous
              recommande de faire le maximum de formations possibles avant de
              commencer à travailler. Vous apprendrez toutes les techniques
              actuelles et vous pouvez travailler en tant qu’autoentrepreneur,
              pour travailler à domicile.
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h5 className="mt-5">Théorie :</h5>
          <ul>
            <li>- Présentation du métier de prothésiste ongulaire</li>
            <li>- Anatomie et règle d'hygiène</li>
            <li>- Pathologies et maladies de l'ongle</li>
            <li>- Conseils sur la publicité</li>
            <li>
              - Découverte et apprentissage des produits et des protocoles
              technique gel UV
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <h5 className="mt-5">Pratique :</h5>
          <ul>
            <li>- Présentation des produits</li>
            <li>- Préparation du poste de travail</li>
            <li>- Les différentes formes salon</li>
            <li>- Utilisation de la ponceuse</li>
            <li>- Pose de vernis permanent</li>
            <li>- Pose de gel extension chablons</li>
            <li>- Pose de gel french</li>
            <li>- Travail des gels de couleur, quelques déco simple</li>
            <li>- Travail en full cover et remplissage</li>
            <li>- Travail sur capsule, sur soit, en binôme et sur modèle.</li>
          </ul>
        </div>
        <div className="mt-5" style={{ textDecorationLine: 'underline' }}>
          <h6>
            Une liste de matériel vous sera présentée lors de votre inscription.
          </h6>
          <h6>
            Un certificat de formation vous sera remis en fin de journée et les
            photos de votre travail seront faites.
          </h6>
        </div>
      </div>
    );
  }
}

export default FormationIntensive;
