import React, { useState } from 'react';
import { Box, Button, Divider, Dialog, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import styles from "./Menu.module.css";
import MenuButton from "../MenuButton/MenuButton.jsx"
import { Add_Item_Cart, Change_Restauraunt_Id, Reduce_Item_Cart } from "../../../Redux/cart/action.js"

export default function Menus({ menu }) {

    const [open, setOpen] = useState(false)
    const [tempkey, setTempKey] = useState("")

    let cart = useSelector((state) => state.cart)
    let cart_id = cart.id;
    let cart_items = cart.items;
    let dispatch = useDispatch();

    let params = useParams()

    const handleAdd = (key) => {
        let item = menu.find((elem) => elem.key === key);

        let { id } = params

        if (cart_id !== "" && id === cart_id) {
            dispatch(Add_Item_Cart(item))
        }
        else if (cart_id === "") {
            dispatch(Change_Restauraunt_Id(id))
            dispatch(Add_Item_Cart(item))
        }
        else {
            setTempKey(key)
            setOpen(true)
        }

    }

    const handleChangeCart = () => {

        let item = menu.find((elem) => elem.key === tempkey);

        let { id } = params;

        dispatch(Change_Restauraunt_Id(id))
        dispatch(Add_Item_Cart(item))

        handleClose();

        setTempKey("")
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleReduce = (key) => {
        dispatch(Reduce_Item_Cart(key))
    }



    let elements = menu.map((elem, index) => {
        return (
            <Box key={`${index}-i`} id={index}>
                <Box className={styles.card}>
                    <Box className={styles.info}>
                        <h2>{elem.dish.toUpperCase()}</h2>
                        <h4>₹{elem.price}</h4>
                    </Box>
                    <Box className={styles.button}>
                        <MenuButton cart_id={cart_id} handleAdd={handleAdd} handleReduce={handleReduce} cart_items={cart_items} id={elem.key} />
                    </Box>
                </Box>
                {index === menu.length - 1 ? null : <Divider />}
            </Box>
        )
    })

    return (
        <Box className={styles.display}>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        You already have items in your cart from different restaurant.
                        Do you want to remove items from that restaurant and add this?
                        </DialogContentText>
                    <DialogActions>
                        <Button color="primary" variant="contained" onClick={handleClose}>No</Button>
                        <Button color="secondary" variant="contained" onClick={() => handleChangeCart()}>Yes</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
            <h1>Menu</h1>
            {elements}
        </Box>
    )
}
