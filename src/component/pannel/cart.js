import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../common/cartCart'
function Cart() {
    const cart = useSelector(state => state.shop.cart)
    const [amount,setAmount] = useState(0)
    const [items, setItem] = useState(0)
    useEffect(() => {
        let price=0;
        let items=0;
        cart.forEach(item =>{
            price+=item.qty*item.amount
            items += item.qty
        }
            )
            console.log(price)
            setAmount(price)
            setItem(items)
    },[cart,amount,setAmount])
    return (
        <div className="cart">
        <div className="cart__items">
        {cart.map((item)=>{
            return (
                <CartCard
                    key={item.id}
                    id={item.id}
                    cartTitle={item.title}
                    cartAmount={item.amount}
                    cartDesc={item.desc}
                    cartItemImage={item.image}
                    qty={item.qty}
                />   
            )}
        )
    }
    </div>
            <div className=" cart-summary">
                <span className="cart-total">Total</span>
                <span className="cart-item">({items} items in CART)</span>
                <span className="cart-total__amount">{amount}</span>
                <button className="btn btn"> proceed to checkout </button>
            </div>
        </div>
    )
}
export default Cart