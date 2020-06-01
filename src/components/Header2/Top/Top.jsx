import React from 'react';
import { Box } from '@material-ui/core';
import styles from "./Top.module.css"
import { Link } from 'react-router-dom';

export default function Top() {
    return (
        <Box className={styles.display}>
            <Box>

            </Box>
            <Box>
                <h1>Zomatooo</h1>
            </Box>
            <Box>
                <Link to="/">Go to Zomato</Link>
            </Box>
        </Box>
    )
}
