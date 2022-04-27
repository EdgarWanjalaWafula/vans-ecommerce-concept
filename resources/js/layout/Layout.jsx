import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../common/Footer/Footer'
import Header from '../common/Header/Header'

const props = {
    children: PropTypes.any
}
const Layout =({children})=> {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout