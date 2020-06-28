import {createStore, applyMiddleware, combineReducers} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import loginReducer from './loginReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    cart: cartReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))