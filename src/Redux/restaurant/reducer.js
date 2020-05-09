import {Update_Restaurant_Order,Add_Restaurant,Add_Restaurant_Auth,Restaurant_Info_Query,Restaurant_Info_Success,Restaurant_Info_Failure} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid";

const initialState = {
    data:[],
    auth:[]
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

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
            auth:[...state.auth,payload]
        }

    case Restaurant_Info_Query:
        return {
            ...state
        }

    case Restaurant_Info_Success:
        let array=payload.map((elem)=>{
            elem.id=uuidv1();
            return elem
        })
        return {
            ...state,
            data:array
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
