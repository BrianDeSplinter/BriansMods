import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../redux/loginReducer'
import './Login.css'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            login: true
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    expandForm = (e) => {
        this.setState({
            login: !this.state.login
        })
    }

    login = (e) => {
        e.preventDefault()
        const {email, password} = this.state
        axios.post('/auth/login', {email, password})
        .then(res => {
            this.props.loginUser(res.data)
            this.props.history.goBack()
        }).catch(err => {
            alert('Could not log in')
        })
    }

    register = (e) => {
        e.preventDefault()
        const {email, password, name} = this.state
        axios.post('/auth/register', {email, password, name})
        .then(res => {
            this.props.loginUser(res.data)
            this.props.history.goBack()
        }).catch(err => {
            alert(err.response.data)
        })
    }


    render() {
        const {email, password, name, login} = this.state
        return(
            <div>
                <h3>I am the {login ? 'Login' : 'Register'} Page!</h3>
                <form name='userInfo'>
                    <button
                        type='switch'
                        value='switch'
                        onClick={(e) => this.expandForm(e)}>{login? 'Click here to Register': 'Click here to Login'}</button>
                    <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={email}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        required
                        onChange={(e) => this.changeHandler(e)}/>
                    {login ? <></>:
                    <input
                        type='text'
                        placeholder='Full Name'
                        name='name'
                        required
                        value={name}
                        onChange={(e) => this.changeHandler(e)}/>}    
                    {login ? 
                    <button
                        type='submit'
                        value='Login'
                        onClick={(e) => this.login(e)}>Login</button>:
                    <button
                        type='submit'
                        value='Register'
                        onClick={(e) => this.register(e)}>Register</button>}
                </form>
            </div>
        )
    }
}

// const mapStateToProps = reduxState => reduxState
export default connect(/*mapStateToProps*/null, {loginUser})(Login)