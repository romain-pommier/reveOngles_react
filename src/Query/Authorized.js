import { Component } from "react"

const AUTHORIZEDURL = "https://apianne.romain-pommier.com/api/auth/login"
class Authorized extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: false,
        }
        this.objectRequest = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: this.props.password,
                email: this.props.email,
            }),
        }
    }
    login() {
        return new Promise((resolve, reject) => {
            fetch(AUTHORIZEDURL, this.objectRequest).then((response) => {
                response.json().then((data) => {
                    if (!data.error) {
                        localStorage.setItem(
                            "user",
                            JSON.stringify({
                                ...data,
                                expire_date:
                                    new Date().getTime() +
                                    data.expires_in * 1000,
                            })
                        )
                    }
                    resolve(data)
                })
            })
        })
    }
}
export default Authorized
