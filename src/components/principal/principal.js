import React from "react"
import "./principal.css"

const Principal = () => (
    <form onSubmit={ev => console.log(ev)}>
        <input type="text" className="textArea"></input>
    </form>
)

export default Principal