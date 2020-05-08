import { Add_Item, Reduce_Item, Change_Restauraunt } from "./actiontypes.js"

const initialState = {
    id: "",
    items: []
}

export default (state = initialState, { type, payload }) => {

    let item;
    switch (type) {

        case Add_Item:
            item = state.items.find((elem) => elem.key === payload.key)
            let array;
            if (item === undefined) {
                let obj = { ...payload, count: 1 }
                array = [...state.items, obj]
            }
            else {
                array = state.items.map((elem) => {
                    if (elem.key === payload.key) {
                        elem.count = elem.count + 1;
                    }

                    return elem
                })
            }

            return {
                ...state,
                items: [...array]
            }
        case Change_Restauraunt:
            return {
                ...state,
                id: payload,
                items: []
            }

        case Reduce_Item:
            item = state.items.find((elem) => elem.key === payload)
            let array2;
            if (item.count === 1) {
                array2 = state.items.filter((elem) => {
                    return elem.key !== item.key
                })
            }
            else {
                item.count = item.count - 1;
                array2 = state.items.map((elem) => {
                    if (elem.key === item.key) {
                        return item
                    }

                    return elem
                })
            }

            if (array2.length === 0) {
                return {
                    ...state,
                    items: [],
                    id: ""
                }
            }
            else {
                return {
                    ...state,
                    items: [...array2]
                }
            }

        default:
            return state
    }
}
