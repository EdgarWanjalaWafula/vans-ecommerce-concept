import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (props) => {
    const location = useLocation()

    useEffect(() => {
        if(location.pathname !== '/'){
            document.body.classList.add('loading')
            window.scrollTo(0, 0)
            setTimeout(() => {
                document.body.classList.remove('loading')
            }, 600);
        }
    }, [location])

    return <>{props.children}</>
}

export default ScrollToTop