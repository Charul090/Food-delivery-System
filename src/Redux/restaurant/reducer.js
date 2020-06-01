import {Logout,Change_Menu,Change_Info,Restaurant_Login_Failure,Restaurant_Login_Success,Update_Restaurant_Order,Add_Restaurant,Add_Restaurant_Auth,Restaurant_Info_Query,Restaurant_Info_Success,Restaurant_Info_Failure} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid";

const initialState = {
    data:[],
    login_data:[],
    auth:false,
    logged_user:{},
    message:""
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Logout:
        return {
            ...state,
            auth:false,
            logged_user:{}
        }

    case Change_Menu:
        let new_resto_data=state.data.map((elem)=>{
            if(elem.id === payload.id){
                elem["menu"]=payload.data
            }
            
            return elem
            
        })

        return {
            ...state,
            data:[...new_resto_data]
        }

    case Change_Info:
        let new_data=state.data.map((elem)=>{
            if(elem.id === payload.id){
                elem["name"]=payload.name
                elem["average_cost_for_two"]=payload.average
                elem["cuisines"]=payload.cuisines
                elem["type"]=payload.type
            }

            return elem
        })

        return {
            ...state,
            data:new_data
        }

    case Restaurant_Login_Failure:
        return {
            ...state,
            auth:false,
            message:payload,
            logged_user:{}
        }

    case Restaurant_Login_Success:
        return {
            ...state,
            logged_user:payload,
            auth:true,
            message:""
        }

    case Add_Restaurant:
        return {
            ...state,
            data:[...state.data,payload]
        }

    case Update_Restaurant_Order:
        let array2=state.data.map((elem)=>{
            if(elem.id === payload.id){
                elem.order_history=[...elem.order_history,payload.order]
            }

            return elem
        })

        return {
            ...state,
            data:array2
        }
    case Add_Restaurant_Auth:
        return {
            ...state,
            login_data:[...state.login_data,payload]
        }

    case Restaurant_Info_Query:
        return {
            ...state
        }

    case Restaurant_Info_Success:

        let data=[];
        let login_data=[];

        payload.forEach((elem)=>{
            let id = uuidv1();
            data.push({
                name:elem.name,
                cuisines:elem.cuisines,
                average_cost_for_two:elem.average_cost_for_two,
                user_rating:elem.user_rating,
                menu:elem.menu,
                order_history:elem.order_history,
                type:elem.type,
                photo_url:elem.photo_url,
                thumb_url:elem.thumb_url,
                id
            })

            login_data.push({
                id,
                username:elem.username,
                password:elem.password
            })
        })

        return {
            ...state,
            data,
            login_data
        }

    case Restaurant_Info_Failure:
        return {
            ...state
        }
    default:
        return {
            ...state
        }
    }
}
