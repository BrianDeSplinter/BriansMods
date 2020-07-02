import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Products.css'

class Products extends Component {
    render(){
        return(
            <Link className='productLink' to={`/product/${this.props.id}`}>
            <div className='products'>
                <h3 className='pOne'>{this.props.name}</h3>
                <img src={this.props.image} alt='failed to load :('/>
                <h5>Price: ${this.props.price}</h5>
                <p>Category: {this.props.category}</p>
                <p>Description: {this.props.description}</p>
                <p>Brian's Notes: {this.props.notes}</p>
                <p>{this.props.status}</p>
            </div>
            </Link>
        )
    }    
}

export default Products