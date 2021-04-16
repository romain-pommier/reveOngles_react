import React, { Component } from "react"

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(localStorage.getItem("user"))
        return <p>sideBar</p>
    }
}
export default SideBar
