import React, {Component} from 'react'
import axios from 'axios'
import Products from '../Products/Products'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            inventory: []
        }
    }

    componentDidMount(){
        axios.get('/products').then(res =>{
            this.setState({
                inventory: res.data
            })
        })
    }

    render() {
        const products = this.state.inventory.map(e => (
            <Products
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image_url}
                price={e.price}
                status={e.status}
                category={e.category}
                description={e.description}
                notes={e.notes}
            />
        ))
        return(
            <div>
                <h3>I am Home!</h3>
                {products}
            </div>
        )
    }
}

export default Home