import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './AdminProducts.css'

class AdminProducts extends Component {
    deleteHandler() {
        axios.delete(`/admin/product/${this.props.id}`)
        .then(res => {{console.log(res)}})
        this.props.update(this.props.index)
    }
    
    render(){
        return(
            <div className='product'>
                <Link className='adminProductsLink' to={`/product/${this.props.id}`}>
                    <div className='product'>
                        <div className='adminProductsName'>
                            <h2>{this.props.name}</h2>
                            <img src={this.props.image} alt='failed to load :('/>
                        </div>
                        <div className='AdminProductsInfo'>
                        <h5>Price: ${this.props.price}</h5>
                        <p>Category: {this.props.category}</p>
                        <p>Description: {this.props.description}</p>
                        <p>Brian's Notes: {this.props.notes}</p>
                        <p>{this.props.status}</p>
                        </div>
                    </div>
                </Link>
                <div className='Edit-delete'>
                    <Link 
                        className='editLink'
                        to={`/admin-edit/${this.props.id}`}
                        >Edit
                    </Link>
                    <button 
                        className='deleteButton'
                        onClick={(e) => {if(window.confirm(`Are you sure you wish to delete ${this.props.name}`)){this.deleteHandler()};}}
                        >Delete
                    </button>
                </div>
            </div>
        )
    }    
}

export default AdminProducts                    