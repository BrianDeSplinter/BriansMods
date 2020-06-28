import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {addToCart} from '../../redux/cartReducer'

class Product extends Component {
    constructor() {
        super()
        this.state = {
            //loading: true
            cart: null,
            quantity: 1
        }
    }

    componentDidMount(){
        axios.get(`/product/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                ...res.data, 
                // loading:false
            })
        })
    }

    componentWillUnmount(){
        console.log('Unmounted!')
    }

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
        this.props.addToCart(this.state)
    }

    render() {
        console.log(this.state)
        return(
            <div>
                <h2>I am the individual product page!</h2>
                <div className='product'>
                    <h4>{this.state.name}</h4>
                    <img src={this.state.image_url} alt='failed to load :('/>
                    <h5>Price: ${this.state.price}</h5>
                    <h5>Category: {this.state.category}</h5>
                    <p>Description: {this.state.description}</p>
                    <p>Notes: {this.state.notes}</p>
                    <h5>Availability: {this.state.status}</h5>
                    <button
                        onClick={(e) => this.decreaseQuantity(e)}
                    >-</button>
                    <p>{this.state.quantity}</p>
                    <button
                        onClick={(e) => this.increaseQuantity(e)}   
                    >+</button>
                    <button>Add to Cart</button>
                </div>
            </div>
        )
    }
}


export default connect(null, {addToCart})(Product)