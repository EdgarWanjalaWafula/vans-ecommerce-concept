import { Outlet, Link } from "react-router-dom";
import { productThumbnail } from "../images/images"
import ProductAddToCart from "./ProductAddToCart"
import ProductQuickView from "./ProductQuickView"
import { useLocation } from 'react-router-dom'

const ProductCard = (props) => {
    const location = useLocation()
    return (
        <div className={`${location.pathname == '/' ? 'col' : 'col-md-3'}`}>
            <Link to={`/single-product/${props.slug}/${props.key}`} className="shop-product-card text-dark w-100 position-relative d-flex align-items-center justify-content-center">
                <div className="product-view-addtocart">
                    <ProductQuickView />
                    <ProductAddToCart />
                </div>
                <div>
                    <img src={productThumbnail} className="d-block mx-auto" />
                    <div className="product-body text-center">
                        <h5 className="position-relative product-title">{props.title}</h5>
                        <span className="price">Ksh. {parseInt(props.price)-0.01}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard