import React from 'react'
import { Box, useMediaQuery } from "@material-ui/core";
import styles from "./Bottom.module.css"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Bottom({ toggle }) {

    let { auth, logged_user } = useSelector((state) => state.user)
    const matches = useMediaQuery("(max-width:694px)", { noSsr: true })

    if (matches) {
        if (toggle) {
            return (
                <Box className={styles.display}>
                    <Box>
                        <Link to="/">Home</Link>
                    </Box>
                    <Box>
                        <Link to="/login">{auth ? "Logout" : "Login"}</Link>
                    </Box>
                    {
                        auth ? null :
                            <Box>
                                <Link to="/user-register">Register</Link>
                            </Box>
                    }
                    {auth ?
                        <Box>
                            <Link to="/orders">Orders</Link>
                        </Box> :
                        null}
                    <Box>
                        <Link to="/business">buggy <i>BUSINESS</i></Link>
                    </Box>
                </Box>
            )
        }
        else {
            return null
        }
    }
    else {
        return (
            <Box className={styles.display}>
                <Box>
                    <Link to="/">Home</Link>
                </Box>
                {
                    auth ? null :
                        <Box>
                            <Link to="/user-register">Register</Link>
                        </Box>
                }
                {auth ?
                    <Box>
                        <Link to="/orders">Orders</Link>
                    </Box> :
                    null}
                <Box>
                    <Link to="/business">buggy <i>BUSINESS</i></Link>
                </Box>
            </Box>
        )
    }

}
