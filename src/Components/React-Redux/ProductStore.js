import { ProductReducer } from './ProductReducer'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { CartItemsReducer } from './ProductReducer'

const rootReducer = combineReducers({
    items : ProductReducer,
    cartProduct : CartItemsReducer
})

const persistConfig = {
    key:'root',
    storage,
    blacklist:['reducer'],
    // whitelist:['reducer'] 
}

const  persistedReducer = persistReducer(persistConfig, rootReducer)
const ProductStore = createStore(persistedReducer, applyMiddleware(thunk))
export const perStore = persistStore(ProductStore)
export default ProductStore;