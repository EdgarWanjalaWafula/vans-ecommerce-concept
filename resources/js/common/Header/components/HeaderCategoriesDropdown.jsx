import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { headerCategoriesBanner, headerCategoriesBanner2 } from '../../../images/images';

const HeaderCategoriesDropdown = (props) => {
    const categories = props.props
    return (
        <div className="header-category-dropdown">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
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
                        <button className="btn"><h6 className="m-0">Shop all</h6></button>
                    </div>
                    <div className="col">
                            {/* <ul className="d-flex cat-related-products">
                                <li>
                                    <Link to='/'>
                                        <img src={headerCategoriesBanner} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        <img src={headerCategoriesBanner2} alt="" />
                                    </Link>
                                </li>
                            </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderCategoriesDropdown
