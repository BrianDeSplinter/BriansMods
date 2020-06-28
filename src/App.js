import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import routes from './routes'
import {connect} from 'react-redux'
import {getUser} from './redux/loginReducer'
import './App.css';

class App extends Component{
  
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <Navbar/>
        {routes}
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {getUser})(App);
