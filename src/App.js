import React, { Component } from "react"
import ReactDOM from "react-dom"
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
import LoginPage from "./Components/Admin/LoginPage"
import Formation from "./Components/Formation"
import SocialBar from "./Components/SocialBar"
import Footer from "./Components/Footer"
import Page404 from "./Components/Page404"
import FormContentAdmin from "./Components/FormContentAdmin"
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
                    <Switch>
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
                            <SocialBar></SocialBar>
                            <Header route="/"></Header>
                            <IntroDiv />
                            <DescriptionEntreprise />
                            <PerfectFlag />
                            <Tarifs />
                            <CarouselMain />
                            <Footer route="/" />
                        </Route>
                        <Route path="/formations">
                            <SocialBar></SocialBar>
                            <Header route="/formations"></Header>
                            <Formation />
                            <Footer route="/formations" />
                        </Route>
                        <Route path="/toto">
                            <FormContentAdmin />
                        </Route>
                        <Route component={Page404} />
                    </Switch>
                </Router>
            </>
        )
    }
}
export default App
