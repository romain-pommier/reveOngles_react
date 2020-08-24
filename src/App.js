import React, { Component } from 'react';
import './App.css';
import PocReact from './Components/PocReact'
import Header from "./Components/Header"
import IntroDiv from "./Components/IntroDiv"
import './style/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  // constructor(props) {
  //   super(props)

  // }
  render() {
    return (
      // <ParallaxProvider>
      <div>
        <Header />
        <IntroDiv />
      </div>
      // </ParallaxProvider>

      // <PocReact />


    )


  }
}


export default App;
