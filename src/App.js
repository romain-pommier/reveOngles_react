import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './App.css'
// import PocReact from './Components/PocReact'
import Header from './Components/Header'
import IntroDiv from './Components/IntroDiv'
import DescriptionEntreprise from './Components/DescriptionEntreprise'
import PerfectFlag from './Components/PerfectFlag'
import Tarifs from './Components/Tarifs'
import CarouselMain from './Components/CarouselMain'
import LoginPage from './Components/LoginPage'
import Footer from './Components/Footer'
import './style/style.scss'
import './style/login.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/accordion.scss'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUserAuthenticated: false,
            token: false,
        }
    }
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        {/* <Route exact path="/admin"></Route> */}
                        <Route
                            exact
                            path="/admin"
                            render={() => {
                                console.log(this.state.isUserAuthenticated)
                                return this.state.isUserAuthenticated ? (
                                    <Redirect to="/" />
                                ) : (
                                    <LoginPage token={this.token} />
                                )
                            }}
                        ></Route>

                        <Route exact path="/">
                            <Header />
                            <IntroDiv />
                            <DescriptionEntreprise />
                            <PerfectFlag />
                            <Tarifs />
                            <CarouselMain />
                            <Footer />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App
