import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {removeFromCart,adjustQty} from '../redux'
function CartCard({cartItemImage,cartTitle,cartDesc,cartAmount,id,qty}) {
    const dispatch=useDispatch()
    const [item, setItem] = useState(qty)
    const onChangeHandler=(e)=>{
        setItem(e.target.value)
        dispatch(adjustQty(id,e.target.value))
    }
    return (
        <div className="cart-item">
            <img className="cart-item__image" src={cartItemImage} />
            <div className="cart-item__detail">
                <span className="cart__title">{cartTitle}</span>
                <span className="cart__desc">{cartDesc}</span>
                <span className="cart__amount">{cartAmount}</span>
            </div>
            <div className="cart-item__actions">
                <input type="number" min='1' value={item} id='qty' name='qty' onChange={onChangeHandler} />
                <button onClick={()=>dispatch(removeFromCart(id))}>delete</button>
            </div>
        </div>
    )
}

export default CartCard
