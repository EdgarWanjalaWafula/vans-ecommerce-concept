import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useTaxonomies } from '../../../data/useApiData';
import HeaderCategoriesDropdown from './HeaderCategoriesDropdown';

const HeaderCategories = () => {
    const taxonomies = useTaxonomies()
    return (
        <div className="header-bottom-bar">
            <div className="row">
                <div className="col">
                    <ul className="d-flex justify-content-between">
                        {
                            taxonomies.map(({ id, title, slug }, index) => (
                                <li key={id}>
                                    <Link to={`/shop-for/${slug}`}>
                                        {title}
                                    </Link>
                                    <HeaderCategoriesDropdown />
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderCategories
