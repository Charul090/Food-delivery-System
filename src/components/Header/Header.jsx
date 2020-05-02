import React from 'react';
import { Box } from "@material-ui/core";
import styles from "./Header.module.css"
import Top from "./Top/Top.jsx"
import Bottom from './Bottom/Bottom';

export default function Header() {
    return (
        <header className={styles.display}>
            <Top />
            <Bottom />
        </header>
    )
}
