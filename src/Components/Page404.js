import React, { Component } from "react"
import { Button } from "react-bootstrap"
import style_404 from "../style/style_404.scss"

class Page404 extends Component {
    render() {
        return (
            <div style={{ paddingTop: "10%", style_404 }}>
                <h1> Page not found</h1>
                <p class="zoom-area">Ooops Erreur 404</p>
                <section class="error-container">
                    <span>
                        <span>4</span>
                    </span>
                    <span>0</span>
                    <span>
                        <span>4</span>
                    </span>
                </section>
                <div class="link-container">
                    <Button variant="outline-dark" href="/">
                        Back
                    </Button>
                </div>
            </div>
        )
    }
}
export default Page404
