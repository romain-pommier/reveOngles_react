import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Button, Form, Image, Toast } from "react-bootstrap"
import LogoReveongles from "../../image/logo_reve_ongles.png"
import Auth from "../../Query/Authorized"

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: this.props,
            errorLogin: false,
        }
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        let loginValue = {
            email: this.state.email,
            password: this.state.password,
        }
        event.preventDefault()
        new Auth(loginValue).login().then((data) => {
            console.log(data)
            const { history } = this.props
            this.setState({ token: data })
            if (!this.state.token.error) {
                history.push("/toto")
                return
            }
            this.setState({ errorLogin: true })
            return
        })
    }

    notificationLoginError = () => {}
    render() {
        return (
            <div
                className="Login container"
                style={{
                    position: "relative",
                    minHeight: "100px",
                }}
            >
                <Form onSubmit={this.handleSubmit}>
                    <Image
                        className="logo_admin"
                        src={LogoReveongles}
                        fluid
                    ></Image>
                    <Form.Group controlId="email">
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder={"Identifiant"}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder={"Mot de passe"}
                        />
                    </Form.Group>
                    <Button block disabled={!this.validateForm()} type="submit">
                        Connexion
                    </Button>
                </Form>
                <Toast
                    onClose={() => {
                        this.setState({ errorLogin: false })
                    }}
                    show={this.state.errorLogin}
                    style={{
                        position: "absolute",
                        top: 30,
                        right: 0,
                        minWidth: "25%",
                    }}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto">
                            Connexion impossible
                        </strong>
                    </Toast.Header>
                    <Toast.Body>
                        Identifiant et/ou mot de passe incorrect
                    </Toast.Body>
                </Toast>
            </div>
        )
    }
}
export default withRouter(LoginPage)
