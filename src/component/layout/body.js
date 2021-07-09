import React from 'react'
import { Route, Switch } from 'react-router'
import Cart from '../pannel/cart'
import Home from '../pannel/home'
import Product from '../pannel/product'
import Services from '../pannel/services'
import SingleItem from '../pannel/singleItem'

function Body() {
    return (
        <div className="container">
        <div className="container__content">
            <Switch>
                <Route exact path="/pannel/home" component={Home}/>
                <Route path="/pannel/services" component={Services}/>
                <Route path="/pannel/product" component={Product}/>
                <Route path="/pannel/product/:id" component={SingleItem}/>
                <Route path="/pannel/cart" component={Cart}/>
            </Switch>
        </div>
            
        </div>
    )
}

export default Body
