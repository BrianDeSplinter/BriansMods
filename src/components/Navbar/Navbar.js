import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../redux/loginReducer'
import {getUser} from '../../redux/loginReducer'
import './Navbar.css'
import axios from 'axios'

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            cartQuantity: 0
        }
    }

    componentDidMount() {
        this.props.getUser()
      }

    logoutHandler = (e) => {
        axios.delete('/auth/logout')
        .then(res => {
            this.props.logoutUser()
            //this.props.history.push('/')
        })
    }
    
    // componentDidUpdate(){
    //     let total = 0

    //     let cartCopy = this.state.props.slice()
    //     cartCopy.forEach((item, i, arr) => {
    //         total += arr[i].quantity
    //     })
    //     console.log('testtestest', this.props.cart)
    //     this.setState({
    //         cartQuantity: total
    //     })
    // }

    render(props) {
        const {isLoggedIn} = this.props.login
        //const {cart} = this.props.cart

        
        
        
        // console.log('this is navProps', cart, 'cartQuantity', cartQuantity)
       
        return(
            <div className='Navbar'>
                <h2>Brian's Mods</h2>
                <h3>{isLoggedIn ? 'logged in' : 'logged out'}</h3>
                <div>
                    <nav className='NavbarLinks'>
                        <Link className='Link' to='/'>Home</Link>
                        <br/>
                        <Link className='Link' to='/about'>About</Link>
                        <br/>
                        <Link className='Link' to='/contact'>Contact Us</Link>
                        <br/>
                        {isLoggedIn ? <button onClick={e => this.logoutHandler(e)}>Logout</button> : <Link className='Link' to='/login'>Login</Link>}
                        <br/>
                        <Link className='Link' to='/cart'>Cart</Link>
                        <p>{this.state.cartQuantity}</p>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {logoutUser, getUser})(Navbar)




// --------------------
// import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
// import {connect} from 'react-redux'
// import './Navbar.css'

// class Navbar extends Component {
    
//     render(props) {
//         const {isLoggedIn} = this.props
//         return(
//             <div>
//                 <h2>Brian's Mods</h2>
//                 <h3>{isLoggedIn ? 'logged in' : 'logged out'}</h3>
//                 <div>
//                     <nav>
//                         <Link to='/'>Home</Link>
//                         <br/>
//                         <Link to='/about'>About</Link>
//                         <br/>
//                         <Link to='/contact'>Contact Us</Link>
//                         <br/>
//                         {isLoggedIn ? <Link to='/logout'>Logout</Link> : <Link to='/login'>Login</Link>}
//                         <br/>
//                         <Link to='/cart'>Cart</Link>
//                     </nav>
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = reduxState => reduxState

// export default connect(mapStateToProps)(Navbar)




//-------------------
// const cartQuantity = () => {
//     let total = 0
//     for(let i = 0; i < this.props.cart.length; i++){
//         total + this.props.cart[i].quantity
//     }
//     return total
// }