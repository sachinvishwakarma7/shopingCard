import { USER_SEND_REQUEST, USER_GET_REQUEST, GET_ERROR } from './Type'
import { ADD_ITEM, GET_ALL_ITEMS, DELETE_ITEM } from './Type'

const cartItems = {
    items: []
}

const initialState = {
    products: [],
    loading: false,
    error: ''
}

export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SEND_REQUEST: return {
            ...state,
            loading: true
        }
        case USER_GET_REQUEST: return {
            ...state,
            loading: false,
            products: action.payload,
        }
        case GET_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state;
    }
}

export const CartItemsReducer = (state = cartItems, action) => {
    // console.log('ProductReducer', state.items)
    // console.log('payload', action.payload)

    switch (action.type) {
        case ADD_ITEM: return {
            ...state,
            items: [...state.items, action.payload]
        }
        case GET_ALL_ITEMS: return {
            ...state,
            items: action.payload
        }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(items => items.id !== action.payload)
            }
        default: return state;
    }
}