import React from "react"
import "./sidebar.css"


function Sidebar ({mostra}) {
    if (mostra == 0) {
        return (
            <></>
        )
    }
    else {
        return (
            <div className="sidebar"><h1>EU TENHO UMA SIDEBAR KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</h1></div>
        )
    }
}

export default Sidebar