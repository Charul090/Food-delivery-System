import React, { useState } from 'react';
import { Box, TextField, Button } from "@material-ui/core"

export default function Step1(props) {

    let { name, setName, cuisines, setCuisines,
        average, setAverage, type, setType, setStep,
        username, setUserName, password, setPassword } = props


    average = Number(average)

    const [warning, setWarning] = useState("")

    const handleClick = () => {
        setWarning("")

        if (name !== "" && cuisines.length !== 0 && average >= 200 && type.length !== 0) {
            setStep(2)
        }
        else {
            setWarning("Fill all the fields")
        }
    }

    return (
        <Box>
            <p style={{ color: "red" }}>{warning}</p>

            <TextField name="name" value={name} onChange={(e) => setName(e.target.value)}
                variant="outlined" margin="dense" label="Name Of Restaurant" fullWidth={true} />

            <TextField name="username" value={username} onChange={(e) => setUserName(e.target.value)}
                variant="outlined" margin="dense" label="Username" fullWidth={true} />

            <TextField name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                variant="outlined" margin="dense" label="Password" fullWidth={true} />

            <TextField name="cuisines" value={cuisines} onChange={(e) => setCuisines(e.target.value.split(","))}
                variant="outlined" margin="dense" label="Cuisines" placeholder="For multiple values use comma" fullWidth={true} />

            <TextField name="average" value={average} onChange={(e) => setAverage(e.target.value)}
                variant="outlined" margin="dense" placeholder="Minimum is Rs.200" label="Average Cost For Two" type="number" fullWidth={true} />

            <TextField name="type" value={type} onChange={(e) => setType(e.target.value.split(","))}
                variant="outlined" margin="dense" label="Types" placeholder="For multiple values use comma" fullWidth={true} />

            <Button color="primary" variant="contained" onClick={handleClick} fullWidth={true}>Next</Button>
        </Box>
    )
}

