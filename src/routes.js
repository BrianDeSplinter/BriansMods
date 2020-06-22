import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout'
import Confirmation from './components/Confirmation/Confirmation'

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/product/:id' component={Product}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/login' component={Login}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/confirmation' component={Confirmation}/>
    </Switch>
)