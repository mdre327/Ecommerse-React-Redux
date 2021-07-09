
import React from 'react'
import { useSelector } from 'react-redux'
import  SimpleCard from '../common/cards'
function Product() {
    const products = useSelector(state => state.shop.products) 
    const prod=[...products]
    const filterStar= prod.slice().sort(function(a,b){return a[prod.amount] < b[prod.amount]?1:-1})
    console.log(filterStar,'k')
    console.log(products)
    return (
        <div className="product">
      
            {products.map((item)=>{
                return (
                    <SimpleCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    img={item.image}
                    desc={item.desc}
                    amount={item.amount}
                    />
                )
            })}
        </div>
    )
}

export default Product
