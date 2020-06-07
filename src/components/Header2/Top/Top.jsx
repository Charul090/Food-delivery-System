import React from 'react';
import { Box, useMediaQuery,IconButton } from '@material-ui/core';
import styles from "./Top.module.css"
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export default function Top({handleClick}) {

    const matches = useMediaQuery("(max-width:694px)", { noSsr: true })

    return (
        <Box className={styles.display}>
            <Box>
                {
                    matches ?
                        <IconButton onClick={handleClick}>
                            <MenuIcon />
                        </IconButton> :
                        null
                }
            </Box>
            <Box>
                <h1>Box buggy</h1>
            </Box>
            <Box className={styles.extra}>
                {
                    matches?null :
                    <Link to="/">Go to Box buggy</Link>
                }
            </Box>
        </Box>
    )
}
