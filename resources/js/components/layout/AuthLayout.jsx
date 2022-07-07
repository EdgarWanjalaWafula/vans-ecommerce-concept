import React from 'react'
import { authBg } from '../../images/images'

const AuthLayout = (props) => {

    return (
        <main className='auth-section position-relative d-flex align-items-center justify-content-center'>
            <img className="position-absolute" src={authBg} alt="" />
            {props.props.children}
        </main>
    )
}

export default AuthLayout