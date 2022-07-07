import React from 'react'
import ProductPrice from '../../../components/product/ProductPrice'

const CartTotalsCheckout = (props) => {
    const items = props.props
    const initial = 0
    const totalPrice = items.reduce((previous, current) => {
        return previous + (current.quantity * current.price)
    }, initial)

    return (
        <div className="cart-totals cart-checkout theme-padding">
            <h2>Cart Totals</h2>
            <table class="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td scope="row">Subtotal</td>
                        <td><ProductPrice price={totalPrice} /></td>
                    </tr>
                    <tr>
                        <td scope="row">Payment method</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td scope="row"><strong>Total</strong></td>
                        <td><ProductPrice price={totalPrice} /></td>
                    </tr>
                </tbody>
            </table>
            <button className='btn w-100 text-white p-3 rounded-0'><h5 className='m-0'>Proceed to checkout</h5></button>
            &nbsp;
            <div class="alert alert-info border-0 rounded-0" role="alert">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            
        </div>
    )
}

export default CartTotalsCheckout