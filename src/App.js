import React, { Component } from 'react';
import './App.css';
import PocReact from './Components/PocReact'
import Header from "./Components/Header"
import IntroDiv from "./Components/IntroDiv"
import './style/style.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  // constructor(props) {
  //   super(props)

  // }
  render() {
    return (
      <div>
        <Header />
        <IntroDiv />
      </div>

      // <PocReact />


    )


  }
}


export default App;
