import {Add_User} from "./actiontypes.js";

const initialState = {
    data:[]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Add_User:
        return { 
            ...state, 
            data:[...state.data,payload] 
        }

    default:
        return state
    }
}
