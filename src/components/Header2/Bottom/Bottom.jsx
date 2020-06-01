import React from 'react'
import { Box } from "@material-ui/core";
import styles from "./Bottom.module.css"
import { Link } from 'react-router-dom';

export default function Bottom() {



    return (
        <Box className={styles.display}>
            <Box>
                <Link to="/business">Home</Link>
            </Box>
            <Box>
                <Link to="/resto-register">Hotel Register</Link>
            </Box>
            <Box>
                <Link to="/resto-login">Restaurant Login</Link>
            </Box>
        </Box>
    )
}
