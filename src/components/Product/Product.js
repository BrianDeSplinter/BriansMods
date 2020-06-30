import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {addToCart} from '../../redux/cartReducer'

class Product extends Component {
    constructor() {
        super()
        this.state = {
            //loading: true
            cart: {},
            quantity: 1
        }
    }

    componentDidMount(){
        axios.get(`/product/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                cart: res.data, 
                // loading:false
            })
        })
    }

    // componentWillUnmount(){
    //     console.log('Unmounted!')
    // }

    increaseQuantity(){
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    decreaseQuantity(){
        if(this.state.quantity > 1){
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    addToCart(){
        const cartObj = {...this.state.cart, quantity: this.state.quantity}
        this.props.addToCart(cartObj)
    }

    render() {
        //console.log(this.state)
        return(
            <div>
                <h2>I am the individual product page!</h2>
                <div className='product'>
                    <h4>{this.state.cart.name}</h4>
                    <img src={this.state.cart.image_url} alt='failed to load :('/>
                    <h5>Price: ${this.state.cart.price}</h5>
                    <h5>Category: {this.state.cart.category}</h5>
                    <p>Description: {this.state.cart.description}</p>
                    <p>Notes: {this.state.cart.notes}</p>
                    <h5>Availability: {this.state.cart.status}</h5>
                    <button
                        onClick={(e) => this.decreaseQuantity(e)}
                    >-</button>
                    <p>{this.state.quantity}</p>
                    <button
                        onClick={(e) => this.increaseQuantity(e)}   
                    >+</button>
                    <button
                        onClick={(e) => this.addToCart()}
                    >Add to Cart</button>
                </div>
            </div>
        )
    }
}


export default connect(null, {addToCart})(Product)