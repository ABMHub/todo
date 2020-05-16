import React, { useState } from "react";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Principal from "./components/principal/principal"

import "./colors.scss";
import "./main.css"

function Main () {
    const [sideOn, sideOnEstado] = useState(false);
    const [notOn, notOnEstado] = useState(false);
    
    let contraste =  "orange";
    let contraste2 = "rgb(255, 194, 80)";
    let bg = notOn ? "#2d2d2d" : "whitesmoke";
    let bgsd = "rgb(211, 211, 211)";
    let font = "black";

    return (
        <>
            <Header noturno = {notOn}/>
            <div className="corpo" style={{backgroundColor:bg}}>
                <Principal />
                <button onClick={ev => sideOnEstado(sideOn => !sideOn)}></button>
                <button onClick={ev => notOnEstado(notOn => !notOn)}></button>
                <Sidebar mostra={sideOn} noturno={notOn} />
            </div>
        </>
    )
}

export default Main;