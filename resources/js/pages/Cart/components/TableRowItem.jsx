import React, { useContext, useState } from 'react'
import ProductPrice from '../../../components/product/ProductPrice'
import { UseCartContext } from '../../../contexts/UseCartContext'

const TableRowItem = (props) => {
    const { id, title, price, quantity, image } = props.props
    const [qty, setQty] = useState(quantity)
    const { items, setCartItems } = useContext(UseCartContext)
    const rowItem = items.find(item => item.id == id)

    const removeCartItem = () => {
        items.splice(items.indexOf(rowItem), 1)
        localStorage.setItem('cart-items', JSON.stringify(items))

        const newItems = [...items]
        setCartItems(newItems) //update parent context
    }

    const updateItemQty = (e) => {
        const value = e.target.valueAsNumber
        const updatedWithQty = { ...rowItem, quantity: value }
        items[items.indexOf(rowItem)] = updatedWithQty
        const newItems = [...items]

        setQty(value)
        setCartItems(newItems)
    }

    return (
        <tr key={id}>
            <td scope="row"><i onClick={removeCartItem} className="bi bi-trash"></i></td>
            <td><img src={`/images/front/product-thumbnails/${image}`} className="d-block mx-auto" /></td>
            <td>
                <p>{title}</p>
                <span className='small d-block'><ProductPrice price={price} /></span>
            </td>
            <td><input max={10} min={1} onChange={updateItemQty} type="number" className='form-control form-control-sm text-center bg-transparent rounded-0' defaultValue={quantity} /></td>
            <td><span className="d-block"><ProductPrice price={parseInt(price) * parseInt(qty)} /></span></td>
        </tr>
    )
}

export default TableRowItem