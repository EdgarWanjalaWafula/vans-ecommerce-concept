import { useContext, useEffect, useState, useRef } from "react"
import { UseCartContext } from "../contexts/UseCartContext"

const ProductAddToCart = (props) => {
    const [cart, setCart] = useState([])
    const { items, setCartItems } = useContext(UseCartContext)
    const { id, price, title, image } = props
    const obj = { id: id, title: title, price: price, image: image, quantity: 1 }

    useEffect(() => {
        if (Object.keys(cart).length > 1) {

            const exist = items.find(item => item.id === id)
            const newObj = [...items, cart]

            if (exist) {
                const existingObj = { ...exist, quantity: exist.quantity + 1 }
                items[items.indexOf(exist)] = existingObj
                const existingItem = [...items]

                setCartItems(existingItem)
                return localStorage.setItem('cart-items', JSON.stringify(items))
            }

            setCartItems(newObj)
            return localStorage.setItem('cart-items', JSON.stringify(newObj))
        }

    }, [cart])

    return (<i title="Add to cart" onClick={() => setCart(obj)} className="bi bi-bag"></i>)
}

export default ProductAddToCart