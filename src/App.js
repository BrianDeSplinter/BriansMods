import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import routes from './routes'
// import axios from 'axios'
// import {connect} from 'react-redux'
// import {getUser} from './redux/loginReducer'
// import {getCart} from './redux/cartReducer'
// import {updateCart} from './redux/cartReducer'
import './App.css';

class App extends Component{
  
  // componentDidMount() {
  //   this.props.getUser()
  // }

  // componentDidMount() {
  //   this.props.getCart()
  // }

  // componentWillUnmount() {
  //   axios.post('/cart', [this.props.cart])
  //   .then(res => console.log('Props sent to sessions'))
  //   this.props.updateCart()
  // }

  render() {
    //console.log('app.js', this.props.cart)
    return (
      <div className="App">
        <Navbar/>
        {routes}
      </div>
    );
  }
}

//const mapStateToProps = reduxState => reduxState
export default App
// connect(mapStateToProps, {getUser, getCart, updateCart})(App);
