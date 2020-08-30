import React, { Component } from 'react';
import './App.css';
// import PocReact from './Components/PocReact'
import Header from "./Components/Header"
import IntroDiv from "./Components/IntroDiv"
import DescriptionEntreprise from "./Components/DescriptionEntreprise"
import PerfectFlag from "./Components/PerfectFlag"
import Tarifs from "./Components/Tarifs"
import CarouselMain from "./Components/CarouselMain"
import Footer from "./Components/Footer"
import './style/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/accordion.scss';

class App extends Component {
  // constructor(props) {
  //   super(props)

  // }
  render() {
    return (
      // <ParallaxProvider>
      <>
        <Header />
        <IntroDiv />
        <DescriptionEntreprise />
        <PerfectFlag />
        <Tarifs />
        <CarouselMain />
        <Footer />
      </>


    )


  }
}


export default App;
