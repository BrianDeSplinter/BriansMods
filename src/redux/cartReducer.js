///import axios from 'axios'

const initialState = {
    cart: []
}

const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const UPDATE_CART = 'UPDATE_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const INCREASE_QUANTITY = 'INCREASE_QUANTITY'
const DECREASE_QUANTITY = 'DECREASE_QUANTITY'


export function getCart() {
    //const sessionCart = axios.get('/cart')

    return {
        type: GET_CART,
        payload: initialState//sessionCart
    }
}

export function updateCart(){   
    return {
        type: UPDATE_CART,
        payload: initialState
    }
}

export function addToCart(stuff){
    return {
        type: ADD_TO_CART,
        payload: stuff
    }
}

export function increaseQuantity(item){
    return {
        type: INCREASE_QUANTITY,
        payload: item
    }
}

export function decreaseQuantity(item){
    return {
        type: DECREASE_QUANTITY,
        payload: item
    }
}

export function removeFromCart(item){
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export default function cartReducer(state = initialState, action){
    switch(action.type) {
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]}
        case INCREASE_QUANTITY:
            return {cart: state.cart.filter(item => item===action.payload).quantity +1}
        case DECREASE_QUANTITY:
            return initialState
        case REMOVE_FROM_CART:
            return {cart: state.cart.filter(item => item!==action.payload)}
        case UPDATE_CART:
            return initialState
        case GET_CART + '_PENDING':
            return initialState
        case GET_CART + '_FULFILLED':
            return  initialState//{...state, cart: [...state.cart, action.payload]}
        case GET_CART + '_REJECTED':
            return initialState
        default:
            return initialState
    }
}