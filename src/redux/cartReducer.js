import axios from 'axios'

const initialState = {
    cart: null,
    isWorking: false
}

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART = 'UPDATE_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


export function getCart() {
    const cart = axios.get('/cart')

    return {
        type: GET_CART,
        payload: initialState
    }
}
export function addToCart(cart){
    return {
        type: ADD_TO_CART,
        payload: cart
    }
}

export function updateCart(){
    return {
        type: UPDATE_CART,
        payload: initialState
    }
}

export function removeFromCart(){
    return {
        type: REMOVE_FROM_CART,
        payload: initialState
    }
}

export default function (state = initialState, action){
    switch(action.type) {
        case ADD_TO_CART:
            return initialState
        case UPDATE_CART:
            return initialState
        case REMOVE_FROM_CART:
            return initialState
        case GET_CART + '_PENDING':
            return initialState
        case GET_CART + '_FULFILLED':
            return initialState
        case GET_CART + '_REJECTED':
            return initialState
        default:
            return initialState
    }
}