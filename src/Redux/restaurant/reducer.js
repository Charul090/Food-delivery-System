import {Add_Restaurant} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid";
import data from "../../data.json"

let array=data.map((elem)=>{
    elem.id=uuidv1();

    return elem
})

const initialState = {
    data:[...array]
}


export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Add_Restaurant:
        return {
            ...state,
            data:[...state.data,payload]
        }

    default:
        return {
            ...state
        }
    }
}
