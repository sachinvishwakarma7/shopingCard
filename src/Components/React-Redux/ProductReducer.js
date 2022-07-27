import { USER_SEND_REQUEST, USER_GET_REQUEST, GET_ERROR } from './Type'

const initialState = {
    products : [],
    loading : false,
    error : ''
}

export const ProductReducer = (state = initialState,action)=>{
    switch(action.type){
        case USER_SEND_REQUEST : return{
            ...state,
            loading:true
        }
        case USER_GET_REQUEST : return{
            ...state,
            loading:false,
            products:action.payload,
        }
        case GET_ERROR : return{
            ...state,
            loading:false,
            error:action.payload
        }
        default:return state;
    }
}