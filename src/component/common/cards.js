import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart ,loadCurrentItem} from '../redux'
import {Link} from 'react-router-dom'
const SimpleCard = ({ img,title,amount,desc,id})=>{
    const dispatch =useDispatch()
    const products = useSelector(state => state.shop.products)
    return(
    <div className="s-card">
        <img className="s-card__prod-img" src={img} alt="prod-img"/>
        <div className="s-card__detail">
            <span className="s-card__title">{title} title</span>
            <span className="s-card__desc">{desc} desc</span>
            <span className="s-card__amt">{amount} Amount</span>
            <div className="s-card__color-sec"></div>
        </div>
            
            <div className="s-card__btn-grp">
               <Link to={`/pannel/product/${id}`}> <button className="s-card__btn" on onClick={() =>dispatch(loadCurrentItem(products))}>view Item</button></Link>
                <button className="s-card__btn" onClick={() =>dispatch(addToCart(id))} >Add To Cart</button>
            </div>
    </div>
    )
}

export default SimpleCard