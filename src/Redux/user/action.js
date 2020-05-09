import {Add_User,Login_Query,Login_Query_Successful,Login_Query_Failure,Logout,Update_User_Order} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid"

const Register_User=(data)=>{
    return {
        type:Add_User,
        payload:{
            ...data,
            id:uuidv1()
        }
    }
}

const Update_User_Info=(data)=>{
    return {
        type:Update_User_Order,
        payload:data
    }
}

const Logout_User=()=>{
    return {
        type:Logout
    }
}

const Login_Query_Send=()=>{
    return{
        type:Login_Query
    }
}

const Login_Successful=(data)=>{
    return {
        type:Login_Query_Successful,
        payload:data
    }
}

const Login_Failure=()=>{
    return {
        type:Login_Query_Failure,
        payload:"username or password is wrong"
    }
}

export {Register_User,Login_Query_Send,Login_Successful,Login_Failure,Logout_User,Update_User_Info}