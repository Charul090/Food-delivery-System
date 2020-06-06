import React from 'react'
import { Box } from "@material-ui/core";
import styles from "./Bottom.module.css"
import { Link ,useLocation} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Bottom() {

    let { auth, logged_user } = useSelector((state) => state.user)

    return (
        <Box className={styles.display}>
            <Box>
                <Link to="/">Home</Link>
            </Box>
            <Box>
                <Link to="/user-register">Register</Link>
            </Box>
            {auth ?
                <Box>
                    <Link to="/orders">Orders</Link>
                </Box> : 
            null}
            <Box>
                <Link to="/business">Zomato <i>BUSINESS</i></Link>
            </Box>
        </Box>
    )
}
