import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Products extends Component {
    render(){
        return(
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
        )
    }    
}

export default Products