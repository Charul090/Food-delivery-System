import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import styles from "./Login.module.css";
import { Button, Box, TextField } from '@material-ui/core';
import {Login_Query_Send,Login_Successful,Login_Failure,Logout_User} from "../../Redux/user/action.js"

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [attempt,setAttempt] = useState(false);

    let dispatch = useDispatch();
    let {auth,data,logged_user,message} = useSelector((state)=>state.user)


    const check_auth=()=>{

        dispatch(Login_Query_Send())

        let check=data.find((elem)=>{
            return elem.username === username
        })

        if(check === undefined){
            setAttempt(true)
            dispatch(Login_Failure());
        }
        else{
            if(check.password === password){
                dispatch(Login_Successful(check))
                setUsername("")
                setPassword("")
            }
            else{
                setAttempt(true)
                dispatch(Login_Failure());
            }
        }
    }

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

    const handleSubmit=(e)=>{
        e.preventDefault();

       check_auth()
    }

    const handleLogout=()=>{
        dispatch(Logout_User())
    }

    if(auth){
        return (
            <main>
                <Box className={styles.display}>
                <Button color="secondary" onClick={handleLogout} fullWidth={true} variant="contained">Logout</Button>
                </Box>
            </main>
        )
    }

    return (
        <main>
            <h1>Login</h1>
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
    )
}
