import React from 'react'
import { Outlet, Link } from "react-router-dom";

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
        icon: 'basket3',
        target: '/',
        dropdown: null
    }
]

const HeaderTopLinks = () => {
    console.log(links)
    return (
        <ul className="d-flex">
            {
                links.map(({ title, icon, target, dropdown }, index) => (
                    <li key={index}>
                        {
                            links.length - 1 === index
                                ? <div className="shop-header-cart position-relative">
                                    <i class="bi bi-basket3"></i>
                                    <span>4</span>
                                </div>
                                : target == null
                                    ? <span>{title}<i class={`bi bi-${icon}`}></i></span>
                                    : <Link to={target}>
                                        <span>{title}<i class={`bi bi-${icon}`}></i></span>
                                    </Link>
                        }
                    </li>
                ))
            }
        </ul>
    )
}

export default HeaderTopLinks
