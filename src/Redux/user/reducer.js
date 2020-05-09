import {Add_User,Login_Query,Login_Query_Successful,Login_Query_Failure,Logout,Update_User_Order} from "./actiontypes.js";

const initialState = {
    data:[
        {
            firstname: 'Charul',
            username: 'dash09',
            email: 'dash@gmail.com',
            password: 'dash09',
            order_history: [],
            id: '96ed5650-9210-11ea-9105-51a233ff4e28'
          }
    ],
    auth:false,
    logged_user:"",
    message:""
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Add_User:
        return { 
            ...state, 
            data:[...state.data,payload] 
        }
    case Login_Query:
        return {
            ...state
        }
    case Update_User_Order:
        let array=state.data.map((elem)=>{
            if(elem.id === payload.id){
                return payload
            }

            return elem
        })

        return {
            ...state,
            data:array
        }
    case Login_Query_Successful:
        return {
            ...state,
            auth:true,
            message:"Login Successful",
            logged_user:payload
        }

    case Login_Query_Failure:
        return {
            ...state,
            auth:false,
            message:"Username or Password incorrect",
            logged_user:""
        }
    
    case Logout:
        return {
            ...state,
            ...initialState
        }

    default:
        return {
            ...state
        }
    }
}
