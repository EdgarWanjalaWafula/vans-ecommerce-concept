import React, { useEffect, useState } from 'react'
import useCartData from '../data/useCartData'
useCartData

export const UseCartContext = React.createContext(
    {
        items:"", 
        setCartItems:()=>{}
    }
)