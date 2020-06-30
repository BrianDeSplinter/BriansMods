import React, {Component} from 'react'
import axios from 'axios'

class AdminEdit extends Component {
    constructor() {
        super()
        this.state = {
            //loading: true
            cart: {},
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

    render() {
        // const {name, image, price, status, merchantId, category, description, notes} = this.state
        return(
            <div>
                <h2>I am the Admin Edit product page!</h2>
                <div className='product'>
                    <h4>{this.state.cart.name}</h4>
                    <img src={this.state.cart.image_url} alt='failed to load :('/>
                    <h5>Price: ${this.state.cart.price}</h5>
                    <h5>Category: {this.state.cart.category}</h5>
                    <p>Description: {this.state.cart.description}</p>
                    <p>Notes: {this.state.cart.notes}</p>
                    <h5>Availability: {this.state.cart.status}</h5>
                </div>
                {/* <form name='userInfo'>
                    <input
                        type='text'
                        placeholder='Product Name'
                        name='name'
                        value={name}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='text'
                        placeholder='Image Url'
                        name='image'
                        value={image}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='text'
                        placeholder='Price'
                        name='price'
                        required
                        value={price}
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='text'
                        placeholder='Status'
                        name='status'
                        required
                        value={status}
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='text'
                        placeholder='Merchant Id'
                        name='merchantId'
                        required
                        value={merchantId}
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='text'
                        placeholder='Category'
                        name='category'
                        required
                        value={category}
                        onChange={(e) => this.changeHandler(e)}/> 
                    <input
                        type='text'
                        placeholder='Description'
                        name='description'
                        required
                        value={description}
                        onChange={(e) => this.changeHandler(e)}/> 
                    <input
                        type='text'
                        placeholder='Notes'
                        name='notes'
                        required
                        value={notes}
                        onChange={(e) => this.changeHandler(e)}/>    
                    <button
                        type='submit'
                        value='Login'
                        onClick={(e) => this.login(e)}>Cancel</button>:
                    <button
                        type='submit'
                        value='Register'
                        onClick={(e) => this.register(e)}>Add Product</button>
                </form> */}
            </div>
        )
    }
}


export default AdminEdit