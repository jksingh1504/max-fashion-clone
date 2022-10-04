import * as actionType from "./actionType"

const initial_state={
    data:[]
}

export const AuthReducer =(state=initial_state,action)=>{
    const {type,payload}=action;

    switch(type){
        default:
            return state;
    }
}