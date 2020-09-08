import React, { useState, Component } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import LogoReveongles from "../image/logo_reve_ongles.png"
import { Image } from "react-bootstrap";
import Query from "../Query/Query"
import Auth from "../Query/Authorized"
class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: false
        }
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        new Auth().getToken().then((data => {
            this.setState({ token: data })
            if (this.state.token.error) {
                return
            }





        }))

    }
    render() {
        return (
            <div className="Login container">

                <Form onSubmit={this.handleSubmit}>
                    <Image className="logo_admin" src={LogoReveongles} fluid></Image>
                    <Form.Group controlId="email" >
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                    <Button
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                </Button>
                </Form>
            </div>
        )
    }
}
export default LoginPage;