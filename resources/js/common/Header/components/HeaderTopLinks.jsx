import React, { useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import { UseCartContext } from '../../../contexts/UseCartContext';

const links = [
    {
        title: '',
        icon: 'search',
        target: null,
        dropdown: null
    },
    {
        title: 'Rest of Africa',
        icon: 'chevron-down',
        target: null,
        dropdown: null
    },
    {
        title: 'Store locator',
        icon: 'geo-alt',
        target: null,
        dropdown: null
    },
    {
        title: 'Help',
        icon: 'question',
        target: null,
        dropdown: null
    },
    {
        title: 'Login',
        icon: 'lock',
        target: '/login',
        dropdown: null
    },
    {
        title: 'Register',
        icon: 'person-plus',
        target: '/register',
        dropdown: null
    },
    {
        title: 'Cart',
        icon: 'bag',
        target: '/page/cart',
        dropdown: null
    }
]

const HeaderTopLinks = () => {
    const { items } = useContext(UseCartContext)
    const count = items == null ? 0 : items.length
    return (
        <ul className="d-flex">
            {
                links.map(({ title, icon, target, dropdown }, index) => (
                    <li key={index}>
                        {
                            links.length - 1 === index
                                ? <div className="shop-header-cart position-relative">
                                    <Link to={target}>
                                        <i className={`bi bi-${icon}`}></i>
                                        <span>{count}</span>
                                    </Link>
                                </div>
                                : target == null
                                    ? <span>{title}<i className={`bi bi-${icon}`}></i></span>
                                    : <Link to={target}>
                                        <span>{title}<i className={`bi bi-${icon}`}></i></span>
                                    </Link>
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default HeaderTopLinks
