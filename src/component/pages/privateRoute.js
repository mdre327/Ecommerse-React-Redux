import React from 'react'
import { useSelector } from 'react-redux'
import {Route , Redirect} from 'react-router-dom'
function privateRouter( children, authenticated , ...rest){
const authenticated=useSelector(state=>session.authenticated)
 return(
     <Route 
     {...rest}
     render= {()=> authenticated?(children):(
         <Redirect   to={{
                    pathname:'/login',
                    state: {from:location} 
                
     }}/>)}
     />
     
 )

}

export default privateRouter