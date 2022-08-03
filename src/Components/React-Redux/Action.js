import axios from 'axios'
import { USER_SEND_REQUEST, USER_GET_REQUEST, GET_ERROR } from './Type'
import { ADD_ITEM, GET_ALL_ITEMS, DELETE_ITEM } from './Type'
import { ADD_NEW_PRODUCT_REQUEST, ADD_NEW_PRODUCT, ADD_NEW_PRODUCT_ERROR } from './Type'

const Request = () => {
    return {
        type: USER_SEND_REQUEST
    }
}

const getRequest = (products) => {
    return {
        type: USER_GET_REQUEST,
        payload: products
    }
}

const getError = (error) => {
    return {
        type: GET_ERROR,
        error: error
    }
}

export const allItems = (items) => {
    return {
        type: ADD_ITEM,
        payload: items
    }
}

export const getAllItem = (items) => {
    return {
        type: GET_ALL_ITEMS,
        payload: items
    }
}

export const deleteItem = (id) => {
    return {
        type: DELETE_ITEM,
        payload: id
    }
}

const addNewProductRequest = () => {
    return {
        type: ADD_NEW_PRODUCT_REQUEST
    }
}

const addNewProduct = (product) => {
    return {
        type: ADD_NEW_PRODUCT,
        payload: product
    }
}

const addNewProductError = (error) => {
    return {
        type: ADD_NEW_PRODUCT_ERROR,
        payload: error
    }
}

// export const featchData = () => {
//     return async (dispatch) => {
//         dispatch(Request());
//         await axios.get('https://dummyjson.com/products')
//             .then(response => {
//                 console.log(response.data.products);
//                 const products = response.data.products;
//                 dispatch(getRequest(products));
//             })
//             .catch(error => {
//                 console.log(error);
//                 dispatch(getError(error));
//             });
//     }
// }

export const featchData = () => {

    return function (dispatch) {
        dispatch(Request())
        axios.get('https://jvideh.pythonanywhere.com/shopping/product_api/products/')
            .then(response => {
                // console.log("jvideh", response.data);
                const products = response.data;
                dispatch(getRequest(products));
            })
            .catch(error => {
                // console.log(error);
                dispatch(getError(error));
            });
    }
}

export const addNewProductfeatch = (name, brand, price, size) => {
    return function (dispatch) {
        let params = {
            "product_name": name,
            "product_brand": brand,
            "product_price": price,
            "product_size": size
        }
        dispatch(addNewProductRequest())
        // console.log("addNewProductfeatch 1", params)
        axios.post('http://jvideh.pythonanywhere.com/shopping/product_api/products/', params)
            .then(response => {
                console.log("addNewProductfeatch 2", response.data);
                let products = response.data;
                dispatch(addNewProduct(products));
            })
            .catch(error => {
                console.log(error);
                dispatch(addNewProductError(error));
            });
    }
}