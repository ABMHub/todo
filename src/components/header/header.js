import React from "react";
import styles from "./header.module.css";

const Header = () => (
    <header>
        <div className={styles.titulo}>
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

export default Header