import React, {Component} from 'react'
import {connect} from 'react-redux'


class Cart extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        console.log(this.props.cart)
        return(
            <div>I am the Cart!</div>
        )
    }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(Cart)