import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import currentItem from '../redux'
function SingleItem({img,desc,amount,title,currentItem}) {
    const { id } = useParams();
   const item=useSelector(state=>state.shop.currentItem)
   console.log(item)
    return (
        <div className="card">
        <img className="card__prod-img" src={item.img} alt="prod-img"/>
        <div className="card__detail">
            <span className="card__title">{item.title} title</span>
            <span className="card__desc">{desc} desc</span>
            <span className="card__amt">{amount} Amount</span>
            <div className="card__color-sec">{id}</div>
        </div>
            
            <div className="card__btn-grp">
                <button className="card__btn" >Add To Cart</button>
            </div>
    </div>
    )
}

export default SingleItem
