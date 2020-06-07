import React from 'react'
import { Box, useMediaQuery } from "@material-ui/core";
import styles from "./Bottom.module.css"
import { Link } from 'react-router-dom';

export default function Bottom({ toggle }) {

    const matches = useMediaQuery("(max-width:694px)", { noSsr: true })

    if (matches) {
        if (toggle) {
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
                    <Box>
                        <Link to="/">Go to Box buggy</Link>
                    </Box>
                </Box>
            )
        }
        else{
            return null
        }
    }
    else {
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
}
