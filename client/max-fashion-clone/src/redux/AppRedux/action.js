import * as actionType from "./actionType"

export const set_data=(payload)=>{
    return {type:actionType.SET_DATA,payload}
}

export const set_user=(payload)=>{
    return {type:actionType.SET_USER,payload}
}

export const set_product_size=(payload)=>{
    return {type:actionType.SET_PRODUCT_SIZE,payload}
}

export const set_cart=(payload)=>{
    return {type:actionType.SET_CART,payload}
}