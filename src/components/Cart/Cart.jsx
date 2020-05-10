import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useHistory} from "react-router-dom"
import {colors, Paper, Box, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from "@material-ui/core";
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import styles from "./Cart.module.css";
import { Add_Item_Cart, Reduce_Item_Cart ,Clear_Cart} from "../../Redux/cart/action.js";
import {Update_User_Info} from "../../Redux/user/action.js"
import {Update_Order} from "../../Redux/restaurant/action.js"

export default function Cart() {

    let { items, id } = useSelector((state) => state.cart);

    let { data } = useSelector((state) => state.restaurant);

    let {auth,logged_user} = useSelector((state)=>state.user)

    let user_data=useSelector((state)=>state.user.data)

    let dispatch = useDispatch();

    let history = useHistory();

    let resto = data.find((elem) => elem.id === id)

    let total_cost;


    const handleAdd = (e, key) => {
        let menu = resto.menu;

        let item = menu.find((elem) => elem.key === key)

        dispatch(Add_Item_Cart(item))
    }

    const handleReduce = (e, key) => {
        dispatch(Reduce_Item_Cart(key))
    }

    const handleConfirm=()=>{
        if(!auth){
            history.push("/login")
        }
        else{
            //User Update
            let obj=user_data.find((elem)=>elem.id === logged_user.id)

            let order={resto_id:id,items,time:new Date().toLocaleString()}

            obj.order_history=[order,...obj.order_history];        

            dispatch(Update_User_Info(obj))

            //Restaurant Update

            order={...order,user:obj.username}

            dispatch(Update_Order({order,id}))

            dispatch(Clear_Cart());

            history.push("/orders")
        }
    }


    if (items.length === 0) {
        return (
            <main>
                <Box>
                    <h1 className={styles.empty}>Cart is Empty</h1>
                </Box>
            </main>
        )
    }

    total_cost = items.reduce((a, elem) => {
        return a + (elem.count * elem.price)
    }, 0)

    return (
        <main>
            <h1>Cart</h1>
            <Paper className={styles.display} elevation={2}>
                <Box className={styles.info}>
                    <List className={styles.list}>
                        {items.map((elem, index) => {
                            return (
                                <ListItem divider={items.length - 1 === index ? false : true} key={elem.key}>
                                    <ListItemText className={styles.name} primary={elem.dish} secondary={`₹${elem.price}`} />
                                    <ListItemText primary={`x${elem.count}`} />
                                    <ListItemText primary={`₹${elem.count * elem.price}`} />
                                    <ListItemSecondaryAction>
                                        <IconButton color="primary" onClick={(e) => handleAdd(e, elem.key)}>
                                            <AddCircleOutlineRoundedIcon />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={(e) => handleReduce(e, elem.key)}>
                                            <RemoveCircleOutlineRoundedIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                    </List>
                    <Box className={styles.cost}>
                        <h4>Total:₹{total_cost}</h4>
                        <Button color="secondary" size="small" variant="contained" onClick={handleConfirm}>Confirm Order</Button>
                    </Box>
                </Box>
            </Paper>
        </main>
    )
}
