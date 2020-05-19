/*import React, { useState, Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./principal.css"

class Checkbox extends Component {
    state = {
        lista: ''
    }
    componentDidMount() {
        this.setState({lista: this.props.texto});
    }
    render () {
        return <><FontAwesomeIcon icon="circle"/> {this.state.lista}</> 
    }
}

function Form ({onSubmit, children}) {
    const [texto, textoEstado] = useState(undefined);

    const send = event => {
        event.preventDefault();
        onSubmit(event);


        for (const input of Array.from(event.target.elements)) {
            textoEstado(texto => input.value)
            console.log(texto)
        }
        
    }
    
    return (
        <>
            <form onSubmit={send}>
                {children}
            </form>
            <Checkbox texto={texto}/>
        </>
    )
    
}

export default Form*/