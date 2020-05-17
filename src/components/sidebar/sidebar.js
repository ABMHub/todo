import React from "react"
import "./sidebar.css"

function Sidebar ({mostra, noturno}) {
    let bg = noturno ? "black" : "rgb(211, 211, 211)";
    let borda = "orange"

    if (mostra == 0) {
        return (
            <></>
        )
    }
    else {
        return (
            <div className="sidebar" style={{backgroundColor: bg, borderColor: borda}}>
            </div>
        )
    }
}

export default Sidebar