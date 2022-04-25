import React from 'react'
import PropTypes from 'prop-types'
import Footer from '../common/Footer/Footer'

const props = {
    children: PropTypes.any
}
const Layout =({children})=> {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}

export default Layout