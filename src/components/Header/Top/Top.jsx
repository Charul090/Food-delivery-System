import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { Box, IconButton, Badge, useMediaQuery } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import styles from "./Top.module.css"

export default function Top({handleClick}) {

    const { items } = useSelector((state) => state.cart);
    const { auth } = useSelector((state) => state.user)

    const matches = useMediaQuery("(max-width:694px)", { noSsr: true })

    let count = 0;

    if (items.length > 0) {
        count = items.reduce((a, elem) => {
            return a + elem["count"]
        }, 0)
    }

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
                <p>
                    {
                        matches ?
                            null :
                            <>
                                <Link to="/login">{auth ? "Logout" : "Login"}</Link><span>/</span>
                            </>
                    }
                    <Link to="/cart">
                        <Badge color="secondary" badgeContent={count} overlap="circle">
                            <IconButton>
                                <ShoppingCartOutlinedIcon />
                            </IconButton>
                        </Badge>
                    </Link>
                </p>
            </Box>
        </Box>
    )
}
