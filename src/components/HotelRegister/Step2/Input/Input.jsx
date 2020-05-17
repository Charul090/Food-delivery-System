import React, { useState, useEffect } from 'react';
import { Box, TextField} from "@material-ui/core";
import styles from "../Step2.module.css"

export default function Input({ value, setInputs, id }) {

    const handleChange = (e) => {
        let key = e.target.name;

        let array = [...value]

        array[id][key] = e.target.value;

        setInputs([...array])

    }


    return (
        <Box className={styles.container}>
            <TextField value={value[id]["dish"]} name="dish" onChange={handleChange} label="Item Name" />
            <TextField value={value[id]["price"]} name="price" onChange={handleChange} type="number" label="Item Price" />
        </Box>
    )
}