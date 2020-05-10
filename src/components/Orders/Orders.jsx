import React, { useState } from 'react';
import { useSelector } from "react-redux"
import styles from "./Orders.module.css";
import { Box, List, ListItem, ListItemText, Paper, Divider } from "@material-ui/core"

export default function Orders() {

    let { data, logged_user } = useSelector((state) => state.user);
    let resto_data = useSelector((state) => state.restaurant.data);

    let user_id = logged_user.id;

    let user_data = data.find((elem) => elem.id === user_id)

    let { order_history } = user_data;

    let resto_names = order_history.map((elem) => {
        let x = resto_data.find((item) => {
            return elem.resto_id === item.id
        })

        return x.name
    })

    if (order_history.length === 0 || order_history === undefined) {
        return (
            <main>
                <h1 className={styles.empty}>You have no orders</h1>
            </main>
        )
    }

    return (
        <main>
            <h1>Order's</h1>
            <Paper className={styles.display} elevation={2}>
                {order_history.map((elem, index) => {
                    let cost = 0;
                    return (
                        <Box className={styles.container}>
                            <Box className={styles.restoinfo}>
                                <h2>{resto_names[index]}</h2>
                                <h5>{elem.time}</h5>
                            </Box>
                            <Box className={styles.order}>
                                <h3>Order</h3>
                                <List className={styles.list}>
                                    {elem.items.map((item, index) => {
                                        cost += (item.count * item.price)
                                        return (
                                            <ListItem divider={elem.items.length - 1 === index ? false : true} key={`${index}-x`}>
                                                <ListItemText className={styles.name} primary={item.dish} secondary={`₹${item.price}`} />
                                                <ListItemText primary={`x${item.count}`} />
                                                <ListItemText primary={`₹${item.count * item.price}`} />
                                            </ListItem>
                                        )
                                    })}
                                </List>
                                <h3>Total:₹{cost}</h3>
                                {order_history.length - 1 === index ? null : <Divider variant="inset" />}
                            </Box>
                        </Box>
                    )
                })}
            </Paper>
        </main>
    )
}
