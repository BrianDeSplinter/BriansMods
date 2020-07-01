import React, {Component} from 'react'
import axios from 'axios'



class AdminAdd extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image_url: '',
            price: '',
            status: '',
            merchant_id: '',
            category: '',
            description: '',
            notes: '',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    clear = (e) => {
        this.setState({
            name: '',
            image_url: '',
            price: '',
            status: '',
            merchant_id: '',
            category: '',
            description: '',
            notes: '',
        })
    }

    addProduct = (e) => {
        const {name, image_url, price, status, merchant_id, category, description, notes} = this.state
        axios.post('/admin/product', {name, image_url, price, status, merchant_id, category, description, notes})
        .then(res => (console.log(res)))
    }

    render() {
        const {name, image_url, price, status, merchant_id, category, description, notes} = this.state

        return(
            <div>
                <h3>I am the Add New Product Page!</h3>
                <form name='newProductInfo'>
                    <input
                        type='text'
                        placeholder='Product Name'
                        name='name'
                        value={name}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='url'
                        placeholder='Image Url'
                        name='image_url'
                        value={image_url}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='text'
                        placeholder='Price'
                        name='price'
                        required
                        value={price}
                        onChange={(e) => this.changeHandler(e)}/>
                    <select id='status' name='status' onChange={(e) => this.changeHandler(e)}>
                        <option value=''>Status</option>
                        <option value='in_stock'>In Stock</option>
                        <option value='running_low'>Running Low</option>
                        <option value='out_of_stock'>Out of Stock</option>
                    </select>   
                    <input
                        type='text'
                        placeholder='Merchant Id'
                        name='merchant_id'
                        required
                        value={merchant_id}
                        onChange={(e) => this.changeHandler(e)}/>
                    <select id='category' name='category' onChange={(e) => this.changeHandler(e)}>
                        <option value=''>Category</option>
                        <option value='performance'>Performance</option>
                        <option value='engine'>Engine</option>
                        <option value='suspension'>Suspension</option>
                        <option value='exhaust'>Exhaust</option>
                        <option value='interior'>Interior</option>
                        <option value='exterior'>Exterior</option>
                        <option value='merch'>Merch</option>
                    </select>  
                    <textarea
                        placeholder='Description'
                        name='description'
                        rows='3'
                        cols='20'
                        required
                        value={description}
                        onChange={(e) => this.changeHandler(e)}/> 
                    <textarea
                        placeholder='Notes'
                        name='notes'
                        rows='3'
                        cols='20'
                        required
                        value={notes}
                        onChange={(e) => this.changeHandler(e)}/> 
                    
                    <button
                        type='submit'
                        value='clear'
                        onClick={(e) => this.clear(e)}>Cancel</button>:
                    <button
                        type='submit'
                        value='addProduct'
                        onClick={(e) => this.addProduct(e)}>Add Product</button>
                </form>
            </div>
        )
    }
}

export default AdminAdd
