import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../redux/loginReducer'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            full_name: '',
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    redirect = (e) => {
        if(this.props.history[this.props.history.length - 1] = '/cart'){
            this.props.history.push('/cart')
        } else {
            this.props.history.push('/home')
        }
    }

    login = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        axios.post('/auth/login', {email, password})
        .then(res => {
            this.props.loginUser(res.data)
            this.redirect()
        }).catch(err => {
            alert('Could not log in')
        })
    }

    register = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        axios.post('/auth/register', {email, password})
        .then(res => {
            this.props.loginUser(res.data)
            this.redirect()
        }).catch(err => {
            alert(err.response.data)
        })
    }


    render() {
        const {email, password} = this.state
        return(
            <div>
                <h3>I am the Login/Register Page!</h3>
                <form>
                    <input
                        type='text'
                        placeholder='email'
                        name='email'
                        value={email}
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='text'
                        placeholder='password'
                        name='password'
                        value={password}
                        onChange={(e) => this.changeHandler(e)}/>
                    <button
                        type='submit'
                        value='Login'
                        onClick={(e) => this.login(e)}>Login</button>
                    <button
                        type='register'
                        value='Register'
                        onClick={(e) => this.register(e)}>Register</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {loginUser})(Login)