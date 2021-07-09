import React, { useEffect, useState } from 'react'
import NavlinkItems from '../common/navlinkitems'
import logo from "../../images/neosoft.svg"
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
function Topbar() {
    const cart=useSelector(state=>state.shop.cart)
    const [count,setCount]=useState(0)
    useEffect(()=>{
        let cartCount=0
        cart.forEach(item=>{
            cartCount+=item.qty
        })
        setCount(cartCount)

    },[count,cart])

    const item= [
        {
            id: "item001",
            label: "home",
            link: "/pannel/home",
            iconClass: "fas fa-th",
          },
          {
              id: "item002",
              label:'Services',
              link: "/pannel/services"
          },
          {
              id: "item003",
              label:'Products',
              link: "/pannel/product"
          }
    ]
    return (
        <div className="navigation">
        <div className="navigation__logo">
        <img src={logo} className="navigation__logo-img" alt="neosoft logo"/>        
        </div>
        <NavlinkItems 
        cName="navigation__item"
        items={item}
        itemCName="navigation-item__items"
        labelCName="navigation-items__label"
         />
         <Link to='/pannel/cart'>
        <div className="navigation-item__cart">
            <span className="navigation-item__cart-title">Cart=</span>
            <span className="navigation-item__cart-item">({count})</span>
        </div>
        </Link>
        </div>
    )
}

export default Topbar
