import React, { useState, useEffect } from 'react';
import { Box, Button, Icon } from "@material-ui/core";
import styles from "./Step2.module.css"
import Input from './Input/Input';

export default function Step2(props) {

    const [count, setCount] = useState(0)

    let {success}=props

    useEffect(()=>{
        if(success){
            setCount(0)
        }
    },[success])

    const handleAdd = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const handleRemove = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    let { setStep, setMenu } = props

    return (
        <Box>
            <h3>Maximum 10 items can be added</h3>
            <Input count={count} setMenu={setMenu} />

            <Box className={styles.icon} mt={2}>
                <Icon color={count >= 10 ? "disabled" : "primary"} fontSize="large" className={styles.plus} onClick={handleAdd}>add_circle</Icon>
                <Icon color={count < 2 ? "disabled" : "secondary"} fontSize="large" className={styles.plus} onClick={handleRemove}>remove_circle</Icon>
            </Box>
            <Box my={2}>
                <Button fullWidth={true} color="primary" variant="contained" type="submit">Submit</Button>
            </Box>
            <Box >
                <Button fullWidth={true} color="secondary" variant="contained" onClick={() => setStep(1)}>Go Back</Button>
            </Box>
        </Box>
    )
}
