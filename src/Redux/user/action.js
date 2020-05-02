import {Add_User} from "./actiontypes.js";

const Register_User=(data)=>{
    return {
        type:Add_User,
        payload:data
    }
}

export {Register_User}