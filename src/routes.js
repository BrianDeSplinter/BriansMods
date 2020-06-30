import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import Login from './components/Login/Login'
import Checkout from './components/Checkout/Checkout'
import Confirmation from './components/Confirmation/Confirmation'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import AdminMain from './components/AdminMain/AdminMain'
import AdminEdit from './components/AdminEdit/AdminEdit'
import AdminAdd from './components/AdminAdd/AdminAdd'

export default(
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/product/:id' component={Product}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/login' component={Login}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/confirmation' component={Confirmation}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/admin' component={AdminMain}/>
        <Route path='/admin-edit/:id' component={AdminEdit}/>
        <Route path='/admin-add' component={AdminAdd}/>
    </Switch>
)