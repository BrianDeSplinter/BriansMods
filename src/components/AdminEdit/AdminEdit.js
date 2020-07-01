import React, {Component} from 'react'
import axios from 'axios'

class AdminEdit extends Component {
    constructor() {
        super()
        this.state = {
            //loading: true
            name: '',
            image_url: '',
            price: '',
            status: '',
            merchant_id: '',
            category: '',
            description: '',
            notes: ''
        }
    }

    componentDidMount(){
        axios.get(`/product/${this.props.match.params.id}`)
        .then(res => {
            this.setState({
                // loading:false
                id: res.data.id,
                name: res.data.name,
                image_url: res.data.image_url,
                price: res.data.price,
                status: res.data.status,
                merchant_id: res.data.merchant_id,
                category: res.data.category,
                description: res.data.description,
                notes: res.data.notes
            })
        })
    }

    clear = (e) => {
        this.props.history.push('/admin')
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    updateProduct = (e) => {
        const {id, name, image_url, price, status, merchant_id, category, description, notes} = this.state
        axios.put(`/admin/product/${id}`, {name, image_url, price, status, merchant_id, category, description, notes})
        .then(res => (console.log('Updated!', res)))
    }

    render() {
        const {name, image_url, price, status, merchant_id, category, description, notes} = this.state
        return(
            <div>
                <h2>I am the Admin Edit product page!</h2>
                <form name='userInfo'>
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
                        value='updateProduct'
                        onClick={(e) => this.updateProduct(e)}>Update Product</button>
                </form>
                
            </div>
        )
    }
}

export default AdminEdit