import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Paper, Box ,List,ListItem,ListItemText, ListItemSecondaryAction,IconButton } from "@material-ui/core";
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import styles from "./Cart.module.css";
import {Add_Item_Cart,Reduce_Item_Cart} from "../../Redux/cart/action.js"

export default function Cart() {

    let { items, id } = useSelector((state) => state.cart);
    let { data } = useSelector((state) => state.restaurant);

    let dispatch=useDispatch();

    let resto = data.find((elem) => elem.id === id)


    const handleAdd=(e,key)=>{
        let menu=resto.menu;

        let item=menu.find((elem)=>elem.key === key)

        dispatch(Add_Item_Cart(item))
    }
    
    const handleReduce=(e,key)=>{
        dispatch(Reduce_Item_Cart(key))
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

    return (
        <main>
            <h1>Cart</h1>
            <Paper className={styles.display}>
                <Box className={styles.info}>
                    <List className={styles.list}>
                        {items.map((elem,index)=>{
                            return (
                                <ListItem divider={items.length-1 === index ?false:true} key={elem.key}>
                                    <ListItemText className={styles.name} primary={elem.dish} secondary={`₹${elem.price}`}/>
                                    <ListItemText primary={`x${elem.count}`} />
                                    <ListItemText primary={`₹${elem.count * elem.price}`}/>
                                    <ListItemSecondaryAction>
                                        <IconButton color="primary" onClick={(e)=>handleAdd(e,elem.key)}>
                                            <AddCircleOutlineRoundedIcon />
                                        </IconButton>
                                        <IconButton color="secondary" onClick={(e)=>handleReduce(e,elem.key)}>
                                            <RemoveCircleOutlineRoundedIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            </Paper>
        </main>
    )
}
