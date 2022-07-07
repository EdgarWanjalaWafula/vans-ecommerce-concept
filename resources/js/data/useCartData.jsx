import React, { useEffect, useState } from 'react'

const useCartData = () => {
    const [data, setData] = useState(localStorage.getItem('cart-items'))

    useEffect(() => {
        if (data == null) {
            localStorage.setItem('cart-items', JSON.stringify([])) //set empty array
            return setData([])
        }

        return setData(JSON.parse(localStorage.getItem('cart-items')))
    }, [])

    return data
}

export default useCartData