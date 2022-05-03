import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { headerCategoriesBanner, headerCategoriesBanner2 } from '../../../images/images';

const HeaderCategoriesDropdown = (props) => {
    const categories = props.props
    return (
        <div className="header-category-dropdown">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul>
                            {
                                categories.map(({ id, title, slug }, index) => (
                                    <li key={id}>
                                        <Link
                                            state={{ id: id, pagetitle: title }}
                                            to={`/collection/${slug}`}
                                        >{title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <button className="btn"><h6 className="m-0 text-dark">Shop all</h6></button>
                    </div>
                    <div className="col">
                        <ul className="d-flex cat-related-products h-100">
                            <li className='position-relative'>
                                <Link to='/'>
                                    <img className='position-absolute h-100' src={headerCategoriesBanner} alt="" />
                                    <h6>product name</h6>
                                </Link>
                            </li>
                            <li className='position-relative'>
                                <Link to='/'>
                                    <img className='position-absolute h-100' src={headerCategoriesBanner2} alt="" />
                                    <h6>product name</h6>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCategoriesDropdown
