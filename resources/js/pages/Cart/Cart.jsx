import React, { useContext } from 'react'
import { UseCartContext } from '../../contexts/UseCartContext'
import CartTotalsCheckout from './components/CartTotalsCheckout'
import TableRowItem from './components/TableRowItem'

const Cart = () => {
    const { items } = useContext(UseCartContext)
    const setLocalStorageItems = () => {
        localStorage.setItem('cart-items', JSON.stringify(items))
    }

    return (
        Array.isArray(items)
            ? items.length >= 1
                ? <>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="theme-padding pr-5">
                                        <h2>shopping cart</h2>
                                        <table className="table table-shopping-cart">
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th><h5 className='m-0'>Product</h5></th>
                                                    <th><h5 className='m-0'>Quantity</h5></th>
                                                    <th><h5 className='m-0'>Total</h5></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    items.map((item, index) => (
                                                        <TableRowItem key={item.id} props={item} />
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        <button onClick={setLocalStorageItems} className="btn btn-sm w-100 btn-light"><i className="bi bi-arrow-clockwise"></i> Update cart</button>
                                    </div>
                                </div>
                                <div className="col with-left-border">
                                    <CartTotalsCheckout props={items} />
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                : <div className='py-4'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className='alert alert-info m-0'>Your cart is empty. Return to shop</div>
                            </div>
                        </div>
                    </div>
                </div>
            : null

    )
}

export default Cart