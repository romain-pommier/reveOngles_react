import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom"
import "./App.css"
import Header from "./Components/Header"
import IntroDiv from "./Components/IntroDiv"
import DescriptionEntreprise from "./Components/DescriptionEntreprise"
import PerfectFlag from "./Components/PerfectFlag"
import Tarifs from "./Components/Tarifs"
import CarouselMain from "./Components/CarouselMain"
import LoginPage from "./Components/LoginPage"
import Formation from "./Components/Formation"
import SocialBar from "./Components/SocialBar"
import Footer from "./Components/Footer"
// import Header from "./Components/Header"
import "./style/style.scss"
import "./style/login.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/accordion.scss"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isUserAuthenticated: false,
            token: false,
        }
    }
    changeBackgroundHeader() {}
    render() {
        return (
            <>
                <Router>
                    {/* <Header></Header> */}
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
                            <Header route="/"></Header>
                            <SocialBar></SocialBar>
                            <IntroDiv />
                            <DescriptionEntreprise />
                            <PerfectFlag />
                            <Tarifs />
                            <CarouselMain />
                            <Footer route="/" />
                        </Route>
                        <Route path="/formations" component={Formation}>
                            <Header route="/formations"></Header>
                            <SocialBar></SocialBar>
                            <Formation />
                            <Footer route="/formations" />
                        </Route>
                    </Switch>
                </Router>
            </>
        )
    }
}

export default App
