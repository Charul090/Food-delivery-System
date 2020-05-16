import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams,useHistory } from "react-router-dom";
import { Box, List, ListItem, ListItemText, Divider, ListItemSecondaryAction, IconButton, Fab } from "@material-ui/core";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import styles from "./Dashboard.module.css"

export default function Dashboard() {

    let params = useParams();
    let history = useHistory();

    let { data } = useSelector((state) => state.restaurant)

    let resto = data.find((elem) => {
        return elem.id === params.id
    })

    let { order_history } = resto

    let { menu } = resto

    const handleInfoEdit=()=>{
        history.push(`/dashboard/${params.id}/edit`)
    }

    return (
        <main>
            <Box>
                <Box className={styles.info}>
                    <Box className={styles.left}>
                        <img src={resto.photo_url} alt="Restaurant" className={styles.img} />
                        <h3>Name: {resto.name}</h3>
                        <h3>Type: {resto.average_cost_for_two}</h3>
                        <h3>Cuisines: {resto.cuisines.join(",")}</h3>
                        <h3>Type: {resto.type.join(",")}</h3>
                        <h3>Rating: {resto.user_rating.aggregate_rating}</h3>
                        <h3>Votes: {resto.user_rating.votes}</h3>
                        <Box className={styles.edit}>
                            <Fab size="small" color="primary" aria-label="add">
                                <EditIcon onClick={handleInfoEdit}/>
                            </Fab>
                        </Box>
                    </Box>
                    <Box className={styles.right}>
                        {order_history.length === 0 ? <h2>No order's yet</h2> :
                            order_history.map((elem, index) => {
                                let cost = 0;
                                return (
                                    <Box className={styles.container}>
                                        <Box className={styles.order}>
                                            <h4 className={styles.user}>User:{elem.user}</h4>
                                            <h5 className={styles.time}>{elem.time}</h5>
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
                                            <h4>Total:₹{cost}</h4>
                                            {order_history.length - 1 === index ? null : <Divider variant="inset" />}
                                        </Box>
                                    </Box>
                                )
                            })}
                    </Box>
                </Box>
                <Box className={styles.menucontainer}>
                    <Box className={styles.menu}>
                        <h2>Menu</h2>
                        <Box className={styles.menulist}>
                            <List>
                                {menu.map((elem, index) => {
                                    return (
                                        <ListItem divider={menu.length - 1 === index ? false : true}>
                                            <ListItemText className={styles.dish} primary={elem.dish}></ListItemText>
                                            <ListItemText primary={`₹${elem.price}`}></ListItemText>
                                            <ListItemSecondaryAction>
                                                <IconButton color="secondary">
                                                    <DeleteForeverIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                        <Box className={styles.edit}>
                            <Fab size="small" color="primary" aria-label="add">
                                <EditIcon />
                            </Fab>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </main>
    )
}
