import React from 'react'
import logo from '../../images/neosoft.svg'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <img className="header-img" src={logo} alt="logo"/>
                <div className="header__register">
                    <Link to={"/login"}><span className="header__btn-login"> LOGIN</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Header
