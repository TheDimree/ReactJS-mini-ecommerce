import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cart/cartSlice'

export default function ProductItem({productData}) {
    
    const dispatch = useDispatch(); // to dispatch addToCart action

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
        <div className='card shadow-lg text-center pb-3'>
            <img src={productData.thumbnail} alt={productData.title} className='card-img w-[100%] h-[220px]' />
            <h4>{productData.title}</h4>
            <p className="price mb-3"><b>${productData.price}</b></p>
            <button type="button" className="btn btn-sm btn-success" onClick={() => dispatch(addToCart({productData}))}>Add to Cart</button>
        </div>
        </div>
    )
}