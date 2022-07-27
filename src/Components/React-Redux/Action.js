import axios from 'axios'
import { USER_SEND_REQUEST, USER_GET_REQUEST, GET_ERROR } from './Type'

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

export const featchData = () => {
    return  (dispatch) => {
        dispatch(Request());
        axios.get('https://dummyjson.com/products')
            .then(response => {
                console.log(response.data.products);
                const products = response.data.products;
                dispatch(getRequest(products));
            })
            .catch(error => {
                console.log(error);
                dispatch(getError(error));
            });
    }
}