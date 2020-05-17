import React, { useState, useEffect } from 'react';
import { Box, Button, Icon } from "@material-ui/core";
import styles from "./Step2.module.css"
import Input from './Input/Input';

export default function Step2(props) {

    const [inputs, setInputs] = useState([])
    const [warning,setWarning] = useState("")

    let { success, setStep, setMenu } = props

    useEffect(()=>{
        let array=inputs.filter((elem)=>{
            return elem.dish !== "" && elem.price !== ""
        }).map((elem,index)=>{
            elem["key"]=`${index}-x`

            return elem;
        })

        if(array.length !== inputs.length){
            setWarning("Please fill all the fields")
        }
        else{
            setWarning("")
        }

        setMenu([...array])

    },[inputs])

    useEffect(() => {
        if (success) {
            setInputs([])
        }
    }, [success])


    const handleAdd = () => {
        let count = inputs.length;

        if (count < 20) {
            let array = [...inputs]
            let obj = { dish: "", price: "" }
            array.push(obj)
            setInputs(array)
        }
    }

    const handleRemove = () => {
        let count = inputs.length;
        if (count > 0) {
            let array = [...inputs]
            array.pop();
            setInputs(array)
        }
    }



    return (
        <Box>
            <h3>Maximum 20 items can be added</h3>
            <p className={styles.warning}>{warning}</p>

            {inputs.map((elem, index) => {
                return <Input value={inputs} setInputs={setInputs} key={`${index}-x`} id={index} />
            })}

            <Box className={styles.icon} mt={2}>
                <Icon color={inputs.length >= 20 ? "disabled" : "primary"} fontSize="large" className={styles.plus} onClick={handleAdd}>add_circle</Icon>
                <Icon color={inputs.length < 1 ? "disabled" : "secondary"} fontSize="large" className={styles.plus} onClick={handleRemove}>remove_circle</Icon>
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
