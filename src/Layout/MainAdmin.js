import { isAuth } from "../utils/isAuth"
import React from "react"
import SideBar from "../Components/Admin/SideBar"
import Disconnect from "../Components/Admin/Disconnect"

export default function MainAdmin({ children }) {
    if (!isAuth()) {
        return (window.location.href = "/login")
    }
    return (
        <React.Fragment>
            <SideBar />
            {children}
            <Disconnect />
        </React.Fragment>
    )
}
