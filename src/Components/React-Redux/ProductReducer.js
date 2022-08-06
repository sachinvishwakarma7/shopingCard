import { USER_SEND_REQUEST, USER_GET_REQUEST, GET_ERROR } from './Type'
import { ADD_ITEM, GET_ALL_ITEMS, DELETE_ITEM } from './Type'
import { ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT, ADD_NEW_PRODUCT_ERROR } from './Type'
import { DELETE_PRODUCT_REQUEST, DELETE_PRODUCT, DELETE_PRODUCT_ERROR } from './Type'
import { UPDATE_PRODUCT } from './Type'
// import { AxiosError } from 'axios'

const cartItems = {
    items: []
}

const initialState = {
    products: [],
    loading: false,
    error: ''
}

const initialStateAddProduct = {
    product: {},
    loading: false,
    error: ""
}

const initialStateDeleteProduct = {
    product: {},
    loading: false,
    error: ""
}

const initialStateUpdateSigleProduct = {
    product: {},
    loading: false,
    error: ""
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

export const addNewProductReducer = (state = initialStateAddProduct, action) => {
    // console.log("add", action.payload)
    switch (action.type) {
        case ADD_NEW_PRODUCT_REQUEST: return {
            ...state,
            loading: true
        }
        case ADD_NEW_PRODUCT: return {
            ...state,
            product: action.payload,
            loading: false
        }
        case ADD_NEW_PRODUCT_ERROR: return {
            ...state,
            loading: false,
            error: action.payload,
            product: {}
        }

        default: return state;
    }
}

export const DeleteProductReducer = (state = initialStateDeleteProduct, action) => {
    // console.log("add", action.payload)
    // console.log(AxiosError.ERR_BAD_REQUEST)
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST: return {
            ...state,
            loading: true
        }
        case DELETE_PRODUCT: return {
            ...state,
            product: action.payload,
            loading: false
        }
        case DELETE_PRODUCT_ERROR: return {
            ...state,
            loading: false,
            error: action.payload,
            product: {}
        }

        default: return state;
    }
}

export const UpdateSingleProducttReducer = (state = initialStateUpdateSigleProduct, action) => {
    // console.log("add", action.payload)
    // console.log(AxiosError.ERR_BAD_REQUEST)
    switch (action.type) {
        case USER_SEND_REQUEST: return {
            ...state,
            loading: true
        }
        case UPDATE_PRODUCT: return {
            ...state,
            product: action.payload,
            loading: false
        }
        case GET_ERROR: return {
            ...state,
            loading: false,
            error: action.payload,
            product: {}
        }

        default: return state;
    }
}