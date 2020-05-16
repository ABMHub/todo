import React from "react";
import "./header.css";

function Header ({noturno}) {
    let fonte = noturno ? "orange" : "black";
    let bg = noturno ? "black" : "orange";

    return (
        <header style={{color: fonte, backgroundColor: bg}}>
            <div className = "titulo">
                Tchu-Du
            </div>
            <div className="links">
                <a>Home</a>&nbsp;
                <a>Link 2</a>&nbsp;
                <a>Link 3</a>&nbsp;
                <a>Link 4</a>
            </div>
        </header>
    )
}

export default Header