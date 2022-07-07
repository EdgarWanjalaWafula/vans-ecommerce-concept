import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useTaxonomies } from '../../../data/useApiData';
import HeaderCategoriesDropdown from './HeaderCategoriesDropdown';

const HeaderCategories = () => {
    const taxonomies = useTaxonomies()
    return (
        <div className="header-bottom-bar">
            <div className="row">
                <div className="col-md-6">
                    <ul className="d-flex justify-content-between">
                        {
                            taxonomies.map(({title, id, slug, product_categories}, index) => (
                                <li key={id}>
                                    <Link to={`/shop-for/${slug}`} >
                                        {title}
                                        {product_categories.length > 0 ? <i className="bi bi-plus"></i> : null }
                                    </Link>
                                    {product_categories.length > 0 ? <HeaderCategoriesDropdown props={product_categories}/> : null }
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
