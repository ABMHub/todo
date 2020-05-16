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
                <button onClick={ev => console.log("funciona")}>Modo Noturno</button>
            </div>
        )
    }
}

export default Sidebar