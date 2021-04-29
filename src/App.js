import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
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
import FormFormation from "./Components/Admin/FormFormation"
import Footer from "./Components/Footer"
import Page404 from "./Components/Page404"
import MainAdmin from "./Layout/MainAdmin"
import "./style/style.scss"
import "./style/login.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/accordion.scss"
import "./style/admin.scss"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // isUserAuthenticated: isAuth(),
            token: false,
        }
    }
    changeBackgroundHeader() {}
    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact path="/login">
                            <LoginPage token={this.token} />
                        </Route>
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
                        <Route path="/formations" exact>
                            <SocialBar></SocialBar>
                            <Header route="/formations"></Header>
                            <Formation />
                            <Footer route="/formations" />
                        </Route>

                        <MainAdmin>
                            <Switch>
                                <Route path="/admin/services" exact>
                                    <h1>admin services</h1>
                                </Route>
                                <Route path="/admin/formations" exact>
                                    <FormFormation />
                                </Route>
                                <Route component={Page404} />
                            </Switch>
                        </MainAdmin>

                        <Route component={Page404} />
                    </Switch>
                </Router>
            </>
        )
    }
}
export default App
