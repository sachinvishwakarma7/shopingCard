import { ProductReducer, CartItemsReducer, addNewProductReducer, DeleteProductReducer } from './ProductReducer'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    items: ProductReducer,
    cartProduct: CartItemsReducer,
    addProduct: addNewProductReducer,
    deleteProductReducer: DeleteProductReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['reducer'] //use for store data to multipal webpages
    // whitelist:['reducer'] //use for store data to single webpage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const ProductStore = createStore(persistedReducer, applyMiddleware(thunk))
export const perStore = persistStore(ProductStore)
export default ProductStore;