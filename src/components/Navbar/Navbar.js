import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../redux/loginReducer'
import './Navbar.css'
import axios from 'axios'

class Navbar extends Component {
    
    logoutHandler = (e) => {
        axios.delete('/auth/logout')
        .then(res => {
            this.props.logoutUser()
            //this.props.history.push('/')
        })
    }

    render(props) {
        const {isLoggedIn} = this.props.login
       
        return(
            <div>
                <h2>Brian's Mods</h2>
                <h3>{isLoggedIn ? 'logged in' : 'logged out'}</h3>
                <div>
                    <nav>
                        <Link to='/'>Home</Link>
                        <br/>
                        <Link to='/about'>About</Link>
                        <br/>
                        <Link to='/contact'>Contact Us</Link>
                        <br/>
                        {isLoggedIn ? <button onClick={e => this.logoutHandler(e)}>Logout</button> : <Link to='/login'>Login</Link>}
                        <br/>
                        <Link to='/cart'>Cart</Link>
                    </nav>
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps, {logoutUser})(Navbar)




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
