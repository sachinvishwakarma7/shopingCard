import { ProductReducer } from './ProductReducer'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    items : ProductReducer
})
const ProductStore = createStore(rootReducer, applyMiddleware(thunk))
export default ProductStore;