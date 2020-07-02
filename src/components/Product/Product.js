import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {addToCart} from '../../redux/cartReducer'
import './Product.css'

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
            <div >
                <h2>{this.state.cart.name}</h2>
                <div className='product'>
                    <div className='image'>
                        <img src={this.state.cart.image_url} alt='failed to load :('/>
                    </div>
                    <div className='info'>
                        <p>Price: ${this.state.cart.price}</p>
                        <p>Category: {this.state.cart.category}</p>
                        <p>Description: {this.state.cart.description}</p>
                        <p>Notes: {this.state.cart.notes}</p>
                        <p>Availability: {this.state.cart.status}</p>
                    </div>
                    <div className='addToCart'>
                        <div className='changeQ'>
                            <button
                                onClick={(e) => this.decreaseQuantity(e)}
                            >-</button>
                            <p>{this.state.quantity}</p>
                            <button
                                onClick={(e) => this.increaseQuantity(e)}   
                            >+</button>
                        </div>
                        <div className='addToCart'>
                            <button
                                onClick={(e) => this.addToCart()}
                            >Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(null, {addToCart})(Product)