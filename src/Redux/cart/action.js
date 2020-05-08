import {Add_Item,Reduce_Item,Change_Restauraunt} from "./actiontypes.js";

const Add_Item_Cart = (item)=>{
    return {
        type:Add_Item,
        payload:item
    }
}


const Reduce_Item_Cart = (item)=>{
    return {
        type:Reduce_Item,
        payload:item
    }
}

const Change_Restauraunt_Id=(id)=>{
    return {
        type:Change_Restauraunt,
        payload:id
    }
}

export {Add_Item_Cart,Reduce_Item_Cart,Change_Restauraunt_Id}