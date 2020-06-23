import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <h3>I am the Navbar!</h3>
                <div>
                    <nav>
                        <Link to='/'>Home</Link>
                        <br/>
                        <Link to='/about'>About</Link>
                        <br/>
                        <Link to='/contact'>Contact Us</Link>
                        <br/>
                        <Link to='/cart'>Cart</Link>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Navbar