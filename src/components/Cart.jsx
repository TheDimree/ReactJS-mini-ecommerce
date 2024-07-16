import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cart/cartSlice'

export default function Cart() {
    const dispatch = useDispatch();
    const { cart, total, totalItems } = useSelector((state) => state.cart);
    // console.log(cart, total, totalItems);
    return (
        <>
            <h1 className="text-center text-7xl py-4" >Cart</h1>
            <h3 className='text-center py-3'>Our legal policies for our Digital Customers. We recommend you to read all the policies before purchasing any product from our website</h3>
            {/* <p>{totalItems} Items in cart</p> */}
            <div className="cart-data row">
                <div className="col-sm-12 col-lg-9">
                    <div className='cart-list'>
                    {total > 0 ? <table className='w-100'>
                            <thead>
                                <tr>
                                    <th className="product-thumbnail"></th>
                                    <th className="product-name">Product</th>
                                    <th className="product-price">Price</th>
                                    <th className="product-quantity">Quantity</th>
                                    <th className="product-subtotal">Subtotal</th>
                                    <th className="product-delete-button">Action</th>
                                </tr>
                            </thead>
                            {cart.map((dataObj, index) => {
                                return (
                                    <>
                                        <tbody>
                                        <tr>
                                            <td className="product-thumbnail"><img src={dataObj.thumbnail} width={120} alt="" /></td>
                                            <td className="product-name">{dataObj.title}</td>
                                            <td className="product-price">${dataObj.price}</td>
                                            <td className="product-quantity"><input type="number" value={1} onChange={(event) => event.target.value}/></td>
                                            <td className="product-subtotal">${dataObj.price}</td>
                                            <td className="product-delete-button"><button className="btn btn-danger" onClick={() => dispatch(removeFromCart(dataObj.id))}>Delete</button></td>
                                        </tr>
                                        </tbody>
                                    </>)
                            })}
                        </table> : <p className="empty-cart text-center font-bold py-20">Your D-Store Cart is empty.</p>}
                        {total>0 ? <div className='text-center'><button className="btn btn-success">Update Cart</button></div> : ""}
                    </div>
                </div>

                <div className="col-sm-12 col-lg-3">
                    {total>0 ? <div className="cart-total"><p className="text-center text-5xl py-4">Cart Total</p>
                    <p>Total ({totalItems}): {total}</p></div> : <p className='empty-cart-total'>Total : 0 </p>}
                </div>
            </div>
    </>
    )
}