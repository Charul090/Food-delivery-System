import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import {useParams,useHistory} from "react-router-dom"
import styles from "./RestoPage.module.css";
import { Box } from '@material-ui/core';

export default function RestoPage() {

    let params = useParams();

    let {id}=params;

    let {data}=useSelector((state)=>state.restaurant)

    let current_resto=data.find((elem)=>elem.id === id)

    return (
        <main>
            <Box className={styles.display}>
                <img src={current_resto.photo_url} className={styles.img}/>
            </Box>
        </main>
    )
}
