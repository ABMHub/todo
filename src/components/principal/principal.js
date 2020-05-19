import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./principal.css"

function Principal () {
    const [text, setText] = useState('')
    const [list, setList] = useState([{
        lista: null,
        flag: false    
    }])
    const [filter, setFilter] = useState(0)

    const Todo = event => {
        event.preventDefault()
        if (text) setList([...list, {
            lista: text,
            flag: true
        }])
        setText(text => '')
    }

    //filtro 0 == sem filtro, filtro 1 == só completas, filtro 2 == só incompletas
    function Item ({element, filtro, index}) {
        console.log("aaaaaaaa" +list[index].lista)
        if (filtro == 0 || (filtro == 1 && element.flag == 1) || (filtro == 2 && element.flag == 0)) {
            if (element.lista) return (
                <div className="checkbox">
                    <div>
                        {console.log(element.lista)}
                        <a onClick={e => setList(...element, done: !element.done)}>
                            <FontAwesomeIcon className="check" icon={element.flag ? "check-circle" : "circle"} />
                        </a>
                    </div>
                    <div>
                        {element.lista} {console.log(element.flag)}
                    </div>
                </div>
            )
        }
        return null
    }

    return (
        <>
            <form onSubmit={Todo}>
                <input type="text" name="text" className="textArea" value={text} onChange={ev => setText(ev.target.value)}/>
            </form>

            <div className="buttons">
                <button onClick={ev => setFilter(filter => 1)}>Completas</button>
                <button onClick={ev => setFilter(filter => 2)}>Incompletas</button>
                <button onClick={ev => setFilter(filter => 0)}>Todas</button>
            </div>

            {list.map((element, index) => <Item element={element} filtro={filter} index={index}/>)}
        </>
    )
}

export default Principal