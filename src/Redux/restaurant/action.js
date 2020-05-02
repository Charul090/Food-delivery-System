import {Add_Restaurant,Restaurant_Info_Query,Restaurant_Info_Success,Restaurant_Info_Failure} from "./actiontypes.js";
import {v1 as uuidv1} from "uuid"

const Add_Restaurant_Info=(data)=>{
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
            id:uuidv1()
        }
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

export {Add_Restaurant_Info,Restaurant_Info}