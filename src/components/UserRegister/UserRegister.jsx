import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Box, Button } from '@material-ui/core';
import styles from "./UserRegister.module.css";
import { Register_User } from "../../Redux/user/action.js"

export class UserRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            username: "",
            email: "",
            password: "",
            warning: ""
        }
    }

    handleChange = (e) => {
        let prop = e.target.value
        let key = e.target.name

        this.setState({
            [key]: prop
        })

    }

    handleSubmit = (e) => {

        e.preventDefault();

        this.setState({
            warning: ""
        })

        let { Register_User, data } = this.props;
        let { firstname, username, email, password } = this.state;

        if (firstname !== "" && username !== "" && email !== "" && password !== "") {

            let array = [...data]

            let match = array.find((elem) => {
                return username === elem.username || email === elem.email
            });

            if (match === undefined) {
                let obj = {
                    firstname,
                    username,
                    email,
                    password,
                    order_history: []
                }

                Register_User(obj)

                this.setState({
                    firstname: "",
                    username: "",
                    email: "",
                    password: "",
                    warning:"Registration Successful"
                })
            }
            else {
                this.setState({
                    warning: "UserName/Email already exists"
                })
            }


        }
        else{
            this.setState({
                warning:"Please fill all the fields"
            })
        }


    }

    render() {

        let { warning } = this.state

        return (
            <main>
                <h1>Register</h1>
                <Box className={styles.container}>
                    <p style={{ color: "red" }}>{warning}</p>
                    <form onSubmit={this.handleSubmit}>
                        <TextField margin="dense" value={this.state.firstname} name="firstname"
                            onChange={this.handleChange} variant="outlined" label="Name" fullWidth={true} />

                        <TextField margin="dense" value={this.state.username} name="username"
                            onChange={this.handleChange} variant="outlined" label="Username" fullWidth={true} />

                        <TextField margin="dense" value={this.state.name} name="email"
                            onChange={this.handleChange} variant="outlined" label="Email" type="mail" fullWidth={true} />

                        <TextField margin="dense" value={this.state.password} name="password"
                            onChange={this.handleChange} variant="outlined" label="Password" type="password" fullWidth={true} />

                        <Button fullWidth={true} color="primary" variant="contained" type="submit">Register</Button>
                    </form>
                </Box>
            </main>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.user.data
})

const mapDispatchToProps = (dispatch) => {
    return {
        Register_User: (data) => dispatch(Register_User(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister)
