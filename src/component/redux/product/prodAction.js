import * as actionTypes from "./prodActionType"

export const addToCart=(itemID)=>{
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID
        }
    }
}

export const removeFromCart=(itemID)=>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload: {id: itemID}
    }
}

export const adjustQty=(itemID,value)=>{
    return{
        type: actionTypes.ADJUST_QTY,
        payload:{
            id: itemID,
            qty:value
        }
    }
}

export const loadCurrentItem=(item)=>{
    return{
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload:item
    }
}

export const filterByColor =(itemID)=>{
    return{
        type: actionTypes.FILTER_BY_COLOR,
        payload:{
            id: itemID
        },
    }
}