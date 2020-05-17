import {Change_Menu,Change_Info,Restaurant_Login_Failure,Restaurant_Login_Success,Update_Restaurant_Order,Add_Restaurant,Add_Restaurant_Auth,Restaurant_Info_Query,Restaurant_Info_Success,Restaurant_Info_Failure} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid"

const Add_Restaurant_Info=(data,id)=>{
    return {
        type:Add_Restaurant,
        payload:{
            ...data,
            user_rating:{
                aggregate_rating:null,
                votes:0
                },
            photo_url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=jason-leung-poI7DelFiVA-unsplash.jpg&w=1920",
            thumb_url:"https://images.unsplash.com/photo-1515669097368-22e68427d265?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg&w=640",
            id
        }
    }
}

const Change_Restuarant_Menu=(data)=>{
    return {
        type:Change_Menu,
        payload:data
    }
}

const Change_Restuarant_Info=(data)=>{
    return {
        type:Change_Info,
        payload:data
    }
}

const Login_Success=(data)=>{
    return {
        type:Restaurant_Login_Success,
        payload:data
    }
}

const Login_Failure=()=>{
    return {
        type:Restaurant_Login_Failure,
        payload:"Incorrect username or password"
    }
}

const Update_Order=(data)=>{
    return {
        type:Update_Restaurant_Order,
        payload:data
    }
}

const Add_Auth_Info=(data,id)=>{
    return {
        type:Add_Restaurant_Auth,
        payload:{
            ...data,
            id
        }
    }
}

const Add_Info=(data,auth)=>{
    return dispatch => {
        let id=uuidv1()
        dispatch(Add_Restaurant_Info(data,id))
        dispatch(Add_Auth_Info(auth,id))
    }
}

const Restaurant_Query=()=>{
    return {
        type:Restaurant_Info_Query
    }
}

const Restaurant_Success=(data)=>{
    return {
        type:Restaurant_Info_Success,
        payload:data
    }
}

const Restaurant_Failure=()=>{
    return {
        type:Restaurant_Info_Failure,
    }
}

const Restaurant_Info=()=>{
    return (dispatch)=>{
        dispatch(Restaurant_Query())
        return fetch("/data.json")
                .then((res)=>res.json())
                .then((data)=>dispatch(Restaurant_Success(data)))
                .catch((err)=>dispatch(Restaurant_Failure()))
    }
}

export {Change_Restuarant_Menu,Change_Restuarant_Info,Add_Info,Restaurant_Info,Update_Order,Login_Success,Login_Failure}