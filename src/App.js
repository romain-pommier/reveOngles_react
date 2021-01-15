import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation,
} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import IntroDiv from './Components/IntroDiv';
import DescriptionEntreprise from './Components/DescriptionEntreprise';
import PerfectFlag from './Components/PerfectFlag';
import Tarifs from './Components/Tarifs';
import CarouselMain from './Components/CarouselMain';
import LoginPage from './Components/LoginPage';
import Formation from './Components/Formation';
import SocialBar from './Components/SocialBar';
import Footer from './Components/Footer';
import './style/style.scss';
import './style/login.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/accordion.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserAuthenticated: false,
            token: false,
        };
    }
    changeBackgroundHeader() {
        const location = useLocation();
        console.log(location.pathname);
        console.log('here');
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
                                console.log(this.state.isUserAuthenticated);
                                return this.state.isUserAuthenticated ? (
                                    <Redirect to="/" />
                                ) : (
                                    <LoginPage token={this.token} />
                                );
                            }}
                        ></Route>

                        <Route exact path="/">
                            <SocialBar></SocialBar>
                            <Header route="/" />
                            <IntroDiv />
                            <DescriptionEntreprise />
                            <PerfectFlag />
                            <Tarifs />
                            <CarouselMain />
                            <Footer route="/" />
                        </Route>
                        <Route exact path="/formations">
                            <SocialBar></SocialBar>
                            <Header route="/formations" />
                            <Formation />
                            <Footer route="/formations" />
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
