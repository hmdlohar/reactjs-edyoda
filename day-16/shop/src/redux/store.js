import { createStore, combineReducers } from 'redux'
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const store = createStore(combineReducers({
    product: productReducer,
    cart: cartReducer
}))

export default store;