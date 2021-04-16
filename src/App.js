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
import LoginPage from "./Components/Admin/LoginPage"
import Formation from "./Components/Formation"
import SocialBar from "./Components/SocialBar"
import Footer from "./Components/Footer"
import Page404 from "./Components/Page404"
import FormContentAdmin from "./Components/Admin/FormFormation"
import SideBar from "./Components/Admin/SideBar"
import { isAuth } from "./utils/isAuth"
import "./style/style.scss"
import "./style/login.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/accordion.scss"

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
                        <Route path="/formations">
                            <SocialBar></SocialBar>
                            <Header route="/formations"></Header>
                            <Formation />
                            <Footer route="/formations" />
                        </Route>
                        <Route
                            path="/admin"
                            render={({ location }) => {
                                return isAuth() ? (
                                    <>
                                        <SideBar />
                                        <FormContentAdmin />
                                    </>
                                ) : (
                                    <Redirect
                                        to={{
                                            pathname: "/login",
                                            state: { from: location },
                                        }}
                                    />
                                )
                            }}
                        />
                        <Route component={Page404} />
                    </Switch>
                </Router>
            </>
        )
    }
}
export default App
