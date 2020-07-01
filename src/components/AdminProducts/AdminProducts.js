import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class AdminProducts extends Component {
    deleteHandler() {
        axios.delete(`/admin/product/${this.props.id}`)
        .then(res => {{console.log(res)}})
        this.props.update(this.props.index)
    }
    
    render(){
        return(
            <div>
                <Link to={`/product/${this.props.id}`}>
                    <div className='product'>
                        <h4>{this.props.name}</h4>
                        <img src={this.props.image} alt='failed to load :('/>
                        <h5>Price: ${this.props.price}</h5>
                        <h5>Category: {this.props.category}</h5>
                        <p>Description: {this.props.description}</p>
                        <p>Brian's Notes: {this.props.notes}</p>
                        <h5>{this.props.status}</h5>
                    </div>
                </Link>
                <div className='Edit-delete'>
                    <Link 
                        to={`/admin-edit/${this.props.id}`}
                        >Edit
                    </Link>
                    <button 
                        onClick={(e) => {if(window.confirm(`Are you sure you wish to delete ${this.props.name}`)){this.deleteHandler()};}}
                        >Delete
                    </button>
                </div>
            </div>
        )
    }    
}

export default AdminProducts                    