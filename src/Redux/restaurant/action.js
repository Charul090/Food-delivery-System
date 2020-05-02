import {Add_Restaurant} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid"

const Add_Restaurant_Info=(data)=>{
    return {
        type:Add_Restaurant,
        payload:{
            ...data,
            id:uuidv1()
        }
    }
}

export {Add_Restaurant_Info}