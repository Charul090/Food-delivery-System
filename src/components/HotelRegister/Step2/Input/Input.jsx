import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Icon } from "@material-ui/core";
import styles from "../Step2.module.css"

export default function Input(props) {
    const [name1, setName1] = useState("")
    const [price1, setPrice1] = useState("")

    const [name2, setName2] = useState("")
    const [price2, setPrice2] = useState("")

    const [name3, setName3] = useState("")
    const [price3, setPrice3] = useState("")

    const [name4, setName4] = useState("")
    const [price4, setPrice4] = useState("")

    const [name5, setName5] = useState("")
    const [price5, setPrice5] = useState("")

    const [name6, setName6] = useState("")
    const [price6, setPrice6] = useState("")

    const [name7, setName7] = useState("")
    const [price7, setPrice7] = useState("")

    const [name8, setName8] = useState("")
    const [price8, setPrice8] = useState("")

    const [name9, setName9] = useState("")
    const [price9, setPrice9] = useState("")

    const [name10, setName10] = useState("")
    const [price10, setPrice10] = useState("")

    let { count, setMenu } = props

    useEffect(() => {

        if (count < 1) {
            setName1("")
            setPrice1("")
        }

        if (count < 2) {
            setName2("")
            setPrice2("")
        }

        if (count < 3) {
            setName3("")
            setPrice3("")
        }

        if (count < 4) {
            setName4("")
            setPrice4("")
        }

        if (count < 5) {
            setName5("")
            setPrice5("")
        }

        if (count < 6) {
            setName6("")
            setPrice6("")
        }

        if (count < 7) {
            setName7("")
            setPrice7("")
        }

        if (count < 8) {
            setName8("")
            setPrice8("")
        }

        if (count < 9) {
            setName9("")
            setPrice9("")
        }

        if (count < 10) {
            setName10("")
            setPrice10("")
        }
    }, [count])

    useEffect(() => {
        let obj = {
            [`${name1}-1`]: price1,
            [`${name2}-2`]: price2,
            [`${name3}-3`]: price3,
            [`${name4}-4`]: price4,
            [`${name5}-5`]: price5,
            [`${name6}-6`]: price6,
            [`${name7}-7`]: price7,
            [`${name8}-8`]: price8,
            [`${name9}-9`]: price9,
            [`${name10}-10`]: price10,
        }

        let result = Object.keys(obj)

        let x = {}

        result.forEach((elem) => {
            if (obj[elem] !== 0 && obj[elem] !== "" && elem !== "") {
                x[elem] = obj[elem]
            }
        })
        console.log(x)
        setMenu(x)
    },
        [name1, name2, name3, name4, name5, name6, name7, name8, name9, name10,
            price1, price2, price3, price4, price5, price6, price7, price8, price9, price10])



    return (
        <>
            {
                count >= 1 ?
                    <Box className={styles.container}>
                        <TextField value={name1} onChange={(e) => setName1(e.target.value)} label="Item Name" />
                        <TextField value={price1} onChange={(e) => setPrice1(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    :
                    null
            }

            {
                count >= 2 ?
                    <Box className={styles.container}>
                        <TextField value={name2} onChange={(e) => setName2(e.target.value)} label="Item Name" />
                        <TextField value={price2} onChange={(e) => setPrice2(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count >= 3 ?
                    <Box className={styles.container}>
                        <TextField value={name3} onChange={(e) => setName3(e.target.value)} label="Item Name" />
                        <TextField value={price3} onChange={(e) => setPrice3(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count >= 4 ?
                    <Box className={styles.container}>
                        <TextField value={name4} onChange={(e) => setName4(e.target.value)} label="Item Name" />
                        <TextField value={price4} onChange={(e) => setPrice4(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count >= 5 ?
                    <Box className={styles.container}>
                        <TextField value={name5} onChange={(e) => setName5(e.target.value)} label="Item Name" />
                        <TextField value={price5} onChange={(e) => setPrice5(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count >= 6 ?
                    <Box className={styles.container}>
                        <TextField value={name6} onChange={(e) => setName6(e.target.value)} label="Item Name" />
                        <TextField value={price6} onChange={(e) => setPrice6(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count >= 7 ?
                    <Box className={styles.container}>
                        <TextField value={name7} onChange={(e) => setName7(e.target.value)} label="Item Name" />
                        <TextField value={price7} onChange={(e) => setPrice7(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count >= 8 ?
                    <Box className={styles.container}>
                        <TextField value={name8} onChange={(e) => setName8(e.target.value)} label="Item Name" />
                        <TextField value={price8} onChange={(e) => setPrice8(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count >= 9 ?
                    <Box className={styles.container}>
                        <TextField value={name9} onChange={(e) => setName9(e.target.value)} label="Item Name" />
                        <TextField value={price9} onChange={(e) => setPrice9(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
            {
                count === 10 ?
                    <Box className={styles.container}>
                        <TextField value={name10} onChange={(e) => setName10(e.target.value)} label="Item Name" />
                        <TextField value={price10} onChange={(e) => setPrice10(e.target.value)} type="number" label="Item Price" />
                    </Box>
                    : null
            }
        </>


    )
}
