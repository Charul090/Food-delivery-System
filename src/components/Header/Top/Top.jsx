import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { Box, IconButton, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import styles from "./Top.module.css"

export default function Top() {

    const {items}=useSelector((state)=>state.cart);
    const {auth}=useSelector((state)=>state.user)

    let count=0;

    if(items.length > 0){
        count=items.reduce((a,elem)=>{
            return a+elem["count"]
        },0)
    }

    return (
        <Box className={styles.display}>
            <Box>

            </Box>
            <Box>
                <h1>Zomatooo</h1>
            </Box>
            <Box>
                <p>
                    <Link to="/login">{auth?"Logout":"Login"}</Link>/
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
