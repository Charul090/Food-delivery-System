import React, { useState, useEffect } from 'react';
import { Box, TextField} from "@material-ui/core";
import styles from "../EditMenu.module.css"

export default function Input({ init_dish, init_price, price_ref,dish_ref }) {

    return (
        <Box className={styles.container}>
            <TextField defaultValue={init_dish} inputRef={dish_ref} name="dish"  label="Item Name" />
            <TextField defaultValue={init_price} inputRef={price_ref} name="price" type="number" label="Item Price" />
        </Box>
    )
}