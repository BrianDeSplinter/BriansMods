import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AdminProducts from '../AdminProducts/AdminProducts'


class AdminMain extends Component {
    constructor() {
        super()
        this.state = {
            adminInventory: []
        }
        this.update = this.update.bind(this)
    }

    componentDidMount(){
        axios.get('/products').then(res =>{
            this.setState({
                adminInventory: res.data
            })
        })
    }

    addNewHandler(){
        console.log('Add New Product')
    }

    update(index){
        let newInventory = this.state.adminInventory
        newInventory.splice(index, 1)
        this.setState({
            adminInventory: newInventory
        })
    }

    render() {
        const adminProducts = this.state.adminInventory.map((e, i) => (
            <AdminProducts
                key={e.id}
                id={e.id}
                name={e.name}
                image={e.image_url}
                price={e.price}
                status={e.status}
                category={e.category}
                description={e.description}
                notes={e.notes}
                index={i}
                update={this.update}
            />
        ))
        return(
            <div>
                <h3>Admin Products Page</h3>
                <Link to={`/admin-add`}>Add New Product
                </Link>
                {adminProducts}
            </div>
        )
    }
}

export default AdminMain