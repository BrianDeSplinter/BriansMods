import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'


const ProtectedRoute = (props) => {
  const {path, component} = props
    

  const isLoggedIn = useSelector(
    (reduxState) => reduxState.login.isLoggedIn
  )

  const isAdmin = useSelector(
    (reduxState) => reduxState.login.user.adminId
  )
  
//   return isLoggedIn ? <Route path={path} component={component}/> : <Redirect to='/' />
    if(isLoggedIn && isAdmin){
        return <Route path={path} component={component}/>
    } else {
        return <Redirect to='/' />
    }
      
}

export default ProtectedRoute