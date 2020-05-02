import {Add_Restaurant,Restaurant_Info_Query,Restaurant_Info_Success,Restaurant_Info_Failure} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid";

const initialState = {
    data:[]
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Add_Restaurant:
        return {
            ...state,
            data:[...state.data,payload]
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
