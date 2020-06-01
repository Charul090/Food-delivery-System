import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"
import { Box, TextField, Button } from "@material-ui/core";
import styles from "./HotelLogin.module.css";
import { Login_Success, Login_Failure } from "../../Redux/restaurant/action.js"
import { Redirect } from 'react-router-dom';
import Header2 from "../Header2/Header2.jsx"

export default function HotelLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login_data } = useSelector((state) => state.restaurant)
    const { auth } = useSelector((state) => state.user)

    let history = useHistory();

    let dispatch = useDispatch();

    const handleChange = (e) => {
        let key = e.target.name;
        let val = e.target.value;

        if (key === "username") {
            setUsername(val)
        }
        else {
            if (key === "password") {
                setPassword(val)
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let status = login_data.find((elem) => {
            return username === elem.username
        })

        if (status === undefined) {
            dispatch(Login_Failure())
        }
        else {
            if (status.password === password) {
                dispatch(Login_Success(status))
                history.push(`/dashboard/${status.id}`)
            }
            else {
                dispatch(Login_Failure())
            }
        }
    }

    if (auth) {
        return (
            <Redirect to="/login"></Redirect>
        )
    }

    return (
        <>
            <Header2 />
            <main>
                <h1>Restaurant Login</h1>
                <Box className={styles.display}>
                    <form onSubmit={handleSubmit}>
                        <TextField margin="dense" value={username} name="username"
                            onChange={handleChange} variant="outlined" label="Username" fullWidth={true} />

                        <TextField margin="dense" value={password} name="password"
                            onChange={handleChange} variant="outlined" label="Password" type="password" fullWidth={true} />

                        <Box mt={2}>
                            <Button color="primary" type="submit" fullWidth={true} variant="contained">Login</Button>
                        </Box>
                    </form>
                </Box>
            </main>
        </>
    )
}
