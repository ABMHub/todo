import React, { useState } from "react";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Principal from "./components/principal/principal"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faLightbulb } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faBars, faLightbulb)

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./main.css"

function Main () {
    
    const [notOn, notOnEstado] = useState(false);
    const [sideOn, sideOnEstado] = useState(false);
    
    let bg = notOn ? "#2d2d2d" : "whitesmoke";
    let font = notOn ? "orange" : "black";
    
    return (
        <>
            <Header noturno = {notOn}/>

            <a onClick={ev => sideOnEstado(sideOn => !sideOn)} className="botaoSide" >
                <FontAwesomeIcon icon="bars" style={{color:font}} />
            </a>

            <div className="corpo" style={{backgroundColor:bg}}>
                <Principal />
                {sideOn ? <a className="botaoNoturno" onClick={ev => notOnEstado(notOn => !notOn)}>
                    <FontAwesomeIcon icon="lightbulb" style={{color:font}} />
                    </a> : ""}
                <Sidebar mostra={sideOn} noturno={notOn} />
            </div>
        </>
    )
}

export default Main;