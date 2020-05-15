import React, { useState } from "react";

import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import Principal from "./components/principal/principal"

import "./main.css"

function Main () {
    const [numero, numeroEstado] = useState(0);

    React.useEffect(() => {
        alert(numero);
    }, [numero])
    
    return (
        <>
            <Header />
            <div className="corpo">
                <Principal />
                <button onClick={ev => numeroEstado(numero => !numero)}></button>
                <Sidebar mostra={numero} />
            </div>
        </>
    )
}

export default Main;