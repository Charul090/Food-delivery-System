import React, { useState } from 'react';
import { Box, TextField, Button } from "@material-ui/core"
import { useSelector,useDispatch } from "react-redux"
import { useParams ,useHistory} from "react-router-dom"
import styles from "./EditInfo.module.css"
import {Change_Restuarant_Info} from "../../Redux/restaurant/action.js"

export default function EditInfo() {

    let params = useParams()
    let history = useHistory()

    let dispatch = useDispatch()

    let { id } = params

    let data = useSelector((state) => state.restaurant.data)

    let curr_resto = data.find((elem) => elem.id === id)

    let { name, cuisines, average_cost_for_two, type } = curr_resto

    let name_input = React.createRef()
    let cuisines_input = React.createRef()
    let average_input = React.createRef()
    let type_input = React.createRef()

    const handleBack = ()=>{
        history.goBack()
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        let name = name_input.current.value
        let cuisines = cuisines_input.current.value.split(",")
        let average = average_input.current.value
        let type = type_input.current.value.split(",")

        let obj={
            name,cuisines,average,type,id
        }

        dispatch(Change_Restuarant_Info(obj))
        history.goBack()
    }

    return (
        <main className={styles.display}>
            <form onSubmit={handleSubmit}>
                <TextField name="name" inputRef={name_input} defaultValue={name}
                    variant="outlined" margin="dense" label="Name Of Restaurant" fullWidth={true} />

                <TextField name="cuisines" inputRef={cuisines_input} defaultValue={cuisines.join(",")}
                    variant="outlined" margin="dense" label="Cuisines" placeholder="For multiple values use comma" fullWidth={true} />

                <TextField name="average" inputRef={average_input} defaultValue={average_cost_for_two}
                    variant="outlined" margin="dense" placeholder="Minimum is Rs.200" label="Average Cost For Two" fullWidth={true} />

                <TextField name="type" inputRef={type_input} defaultValue={type.join(",")}
                    variant="outlined" margin="dense" label="Types" placeholder="For multiple values use comma" fullWidth={true} />

                <Box my={1}>
                    <Button color="primary" type="submit" variant="contained" fullWidth={true}>Submit</Button>
                </Box>
                <Box>
                    <Button color="secondary" variant="contained" onClick={handleBack} fullWidth={true}>Cancel</Button>
                </Box>
            </form>
        </main>
    )
}
