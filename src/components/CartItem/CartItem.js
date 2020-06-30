import React, {Component} from 'react'
import {connect} from 'react-redux'
import {removeFromCart} from '../../redux/cartReducer'
import {increaseQuantity} from '../../redux/cartReducer'
import {decreaseQuantity} from '../../redux/cartReducer'


class CartItem extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         //loading: true
    //         cart: {},
    //         quantity: this.props.number
    //     }
    // }

    // componentDidMount(){
    //     this.props.totalFinder()
    // }


    removeFromCart(){
        let index = this.props.index
        this.props.removeFromCart(this.props.cart.cart[index])
    }
    
    render() {
        // this.props.totalFinder(this.props.number, this.props.price)
        //console.log('cart',this.props.cart.cart[this.props.index])
        //console.log('cart',this.props.index)

        return(
            <div>
                <div className='product'>
                    <h4>{this.props.name}</h4>
                    <img src={this.props.image} alt='failed to load :('/>
                    <h5>Price: ${this.props.price}</h5>
                    <button
                        onClick={(e) => this.props.decreaseQ(this.props.index)}
                    >-</button>
                    <p>{this.props.number}</p>
                    <button
                        onClick={(e) => this.props.increaseQ(this.props.index)}   
                    >+</button>
                    <button
                        onClick={(e) => this.removeFromCart()}
                    >Remove From Cart</button>
                    <h4>Total: ${this.props.number * this.props.price}</h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
const mapDispatchToProps ={removeFromCart, increaseQuantity, decreaseQuantity}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem)