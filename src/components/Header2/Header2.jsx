import React, { useState } from 'react';
import styles from "./Header2.module.css"
import Top from "./Top/Top.jsx"
import Bottom from './Bottom/Bottom';

export default function Header() {
    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <header className={styles.display}>
            <Top handleClick={handleClick} />
            <Bottom toggle={toggle} />
        </header>
    )
}
