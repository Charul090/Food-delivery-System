import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import styles from "./RestoPage.module.css";
import { Box } from '@material-ui/core';
import Menu from "./Menu/Menu.jsx"
import Header from '../Header/Header';

export default function RestoPage() {

    let params = useParams();

    let { id } = params;

    let { data } = useSelector((state) => state.restaurant)

    let current_resto = data.find((elem) => elem.id === id)

    return (
        <>
            <Header />
            <main>
                <Box className={styles.display}>
                    <img src={current_resto.photo_url} className={styles.img} />
                    <Box className={styles.info}>
                        <Box className={styles.restoinfo}>
                            <h1>{current_resto.name}</h1>
                            <h3>Average for two: ₹{current_resto.average_cost_for_two}</h3>
                            <h3>{current_resto.type.join(", ")}</h3>
                        </Box>
                        <Box className={styles.restoratings}>
                            <h2 className={styles.rating}>{current_resto.user_rating.aggregate_rating}</h2>
                        </Box>
                    </Box>
                    <Box className={styles.menu}>
                        <Menu menu={current_resto.menu} />
                    </Box>
                </Box>
            </main>
        </>
    )
}
