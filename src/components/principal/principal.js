import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./principal.css"

function Principal () {
    const vetor = []
    const [text, setText] = useState('')
    const [list, setList] = useState(vetor)
    const [filter, setFilter] = useState(0)

    const AddToDo = event => {
        event.preventDefault()
        if (text) setList([...list, {
            lista: text,
            flag: false
        }])
        setText(text => '')
    }

    function checkToDo (index) {
        setList(list.map((el, i)=>{
            if (i === index){
                return {...el, flag: !el.flag}
            }
            else {
                return el
            }
        }))
    }

    function delToDo (index) {
        setList(list.map((el, i)=>{
            if (i === index){
                return {...el, lista: null}
            }
            else {
                return el
            }
        }))
     
    }

    //filtro 0 == sem filtro, filtro 1 == só completas, filtro 2 == só incompletas
    function Item ({element, filtro, index}) {
        if (filtro == 0 || (filtro == 1 && element.flag == 1) || (filtro == 2 && element.flag == 0)) {
            if (element.lista) return (
                <>
                <div className="checkbox">
                    <div>
                        <a onClick={ev => checkToDo(index)}>
                            <FontAwesomeIcon className="check" icon={element.flag ? "check-circle" : "circle"} />
                        </a>
                    </div>
                    <div>
                        <span style={element.flag ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{element.lista}</span>
                        <FontAwesomeIcon icon="trash-alt" className="lixo" onClick={ev => delToDo(index)}/>
                    </div>
                </div>
                </>   
            )
        }
        return null
    }
    
    React.useEffect(() => {
        let loaded = JSON.parse(localStorage.getItem('list')) || []
        setList(() => loaded)
    }, [])

    React.useEffect(() =>{ 
        if (list == null) return
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    if (list == null) return null

    return (
        <>  
            <form onSubmit={AddToDo}>
                <input type="text" name="text" className="textArea" value={text} onChange={ev => setText(ev.target.value)}/>
            </form>

            <div className="buttons">
                <button onClick={ev => setFilter(filter => 1)}>Completas</button>
                <button onClick={ev => setFilter(filter => 2)}>Incompletas</button>
                <button onClick={ev => setFilter(filter => 0)}>Todas</button>
            </div>

            {list.map((element, index) => <Item element={element} filtro={filter} index={index} key={index}/>)}
            {console.log(list)}
        </>
    )
}

export default Principal