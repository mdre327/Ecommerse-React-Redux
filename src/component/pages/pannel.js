import React from 'react'
import Body from '../layout/body'
import Footer from '../layout/footer'
import Topbar from '../layout/topbar'
import {  Redirect} from 'react-router'
function Pannel() {
    return (
        <React.Fragment>
        <div className="pannel"   >
            <Topbar/>
            
            <Body/>            
        </div>
        <Footer/>
        <Redirect
        push to='/pannel/home'
      />
        </React.Fragment>
    )
}

export default Pannel
