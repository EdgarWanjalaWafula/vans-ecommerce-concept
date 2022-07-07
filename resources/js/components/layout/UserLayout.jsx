import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Footer from '../../common/Footer/Footer'
import Header from '../../common/Header/Header'
import { useProducts } from '../../data/useApiData'
import { UseProductContext } from '../../contexts/UseProductContext'
import { useLocation } from 'react-router-dom'
import Pagetitle from '../../common/pagetitle/Pagetitle'
import AuthLayout from './AuthLayout'
import { UseCartContext } from '../../contexts/UseCartContext'

const props = {
    children: PropTypes.any
}

const UserLayout = ({ children }) => {
    const { pathname } = useLocation()
    const localStorageData = localStorage.getItem('cart-items') == null ? localStorage.setItem('cart-items', JSON.stringify([])) : JSON.parse(localStorage.getItem('cart-items'))
    const [items, setCartItems] = useState(localStorageData)

    return (
        <>
            {
                pathname == '/login'
                    ? <AuthLayout {...children} />
                    :
                    <>
                        <UseCartContext.Provider value={{ items, setCartItems }}>
                            <Header />
                            {pathname == '/' ? null : <Pagetitle />}
                            <UseProductContext.Provider value={useProducts()}>

                                {children}

                            </UseProductContext.Provider>
                        </UseCartContext.Provider>
                        <Footer />
                    </>
            }
        </>
    )
}

export default UserLayout