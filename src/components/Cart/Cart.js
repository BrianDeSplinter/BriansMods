import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import CartItem from '../CartItem/CartItem'

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            cart: [],
            //loading: true
            cartTotal: 0,
            test: 0
        }
        //this.totalFinder = this.totalFinder.bind(this)
        this.increaseQ = this.increaseQ.bind(this)
        this.decreaseQ = this.decreaseQ.bind(this)
    }

    componentDidMount(){
        this.setState({
            cart: this.props.cart.cart
        })
    }

    increaseQ(index){
        let cartCopy = this.state.cart.slice()
        cartCopy.forEach((item, i, arr) =>{
            if(i === index) {
                arr[i].quantity++
            }
        })
        this.setState({
            cart: cartCopy
        })
    }

    decreaseQ(index){
        let cartCopyTwo = this.state.cart.slice()
        cartCopyTwo.forEach((item, i, arr) =>{
            if(i === index ) {
                arr[i].quantity--
            }
        })
        this.setState({
            cart: cartCopyTwo
        })
    }

    componentDidUpdate(){
        this.totalFinder()
    }

    totalFinder(){
        let total = 0
        this.state.cart.forEach((item, i , arr) => {
            total += Number(this.state.cart[i].quantity) * Number(this.state.cart[i].price)
            // console.log('total', total)
            // console.log('this.state.cart', this.state.cart[i].quantity)
            // console.log('this.state.cart', this.state.cart[i].price)
        })
        console.log('total', total)
        // this.setState({
        //     cartTotal: total
        // })
    }
    // totalFinder(num1, num2){
    //     let cartTotal = this.state.cartTotal + (num1*num2)
    //     this.setState({
    //         cartTotal: cartTotal
    //     })
    // }

    render() {
        const items = this.props.cart.cart.map((e,i) => (
            <CartItem
            key={e.id}
            index={i}
            id={e.id}
            name={e.name}
            image={e.image_url}
            price={e.price}
            number={e.quantity}
            increaseQ={this.increaseQ}
            decreaseQ={this.decreaseQ}
            //totalFinder={this.totalFinder}
            />
            ))
            console.log('cart', this.state.cart)

        return(
            <div>
                <h2>I am the Cart!</h2>
                {items}
                <h3>Cart Total: ${this.state.cartTotal}</h3>
                <Link to='/checkout'>Checkout</Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Cart)