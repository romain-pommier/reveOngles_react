import React from "react"
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew"
const disconnect = () => {
    localStorage.clear()
    window.location.href = "/login"
}

export default function Disconnect() {
    return (
        <div
            className="powerButton"
            onClick={() => {
                disconnect()
            }}
        >
            <PowerSettingsNewIcon />
        </div>
    )
}
