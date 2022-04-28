import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'
import { useProducts } from '../data/useApiData'
import { UseProductContext } from '../contexts/UseProductContext'
import { useLocation } from 'react-router-dom'
import Pagetitle from '../common/pagetitle/Pagetitle'

const props = {
    children: PropTypes.any
}
const Layout = ({ children }) => {
    const location = useLocation()
    return (
        <div>
            <Header />
            {location.pathname == '/' ? null : <Pagetitle />}
            <UseProductContext.Provider value={useProducts()}>
                {children}
            </UseProductContext.Provider>
            <Footer />
        </div>
    )
}

export default Layout