import React, {Component} from 'react'
import axios from 'axios'



class AdminAdd extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            price: '',
            status: '',
            merchantId: undefined,
            category: '',
            description: '',
            notes: '',
            cars: undefined
        }
        
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    clear = (e) => {
        // e.preventDefault()
        // const {email, password} = this.state
        // axios.post('/auth/login', {email, password})
        // .then(res => {
        //     this.props.loginUser(res.data)
        //     this.props.history.goBack()
        // }).catch(err => {
        //     alert('Could not log in')
        // })
    }

    addProduct = (e) => {
        // e.preventDefault()
        // const {email, password, name} = this.state
        // axios.post('/auth/register', {email, password, name})
        // .then(res => {
        //     this.props.loginUser(res.data)
        //     this.props.history.goBack()
        // }).catch(err => {
        //     alert(err.response.data)
        // })
    }


    render() {
        const {name, image, price, status, merchantId, category, description, notes} = this.state
        console.log('name', name)
        console.log('image', image)
        // console.log('price', price)
        // console.log('status', status)
        // console.log('merchant Id', merchantId)
        // console.log('category', category)
        // console.log('description', description)
        // console.log('notes', notes)

        return(
            <div>
                <h3>I am the Add New Product Page!</h3>
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
                    <select id='status' name='status' onChange={(e) => this.changeHandler(e)}>
                        <option value=''>Status</option>
                        <option value='in_stock'>In Stock</option>
                        <option value='running_low'>Running Low</option>
                        <option value='out_of_stock'>Out of Stock</option>
                    </select>   
                    <input
                        type='text'
                        placeholder='Merchant Id'
                        name='merchantId'
                        required
                        value={merchantId}
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

// unrelated question: What is a day in the life of a dev like? is most of the time spent reviewing/optimizing old code or writing new code?