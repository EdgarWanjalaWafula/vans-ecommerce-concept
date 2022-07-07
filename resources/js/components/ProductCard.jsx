import { Outlet, Link } from "react-router-dom";
import ProductAddToCart from "./ProductAddToCart"
import ProductQuickView from "./ProductQuickView"
import { useLocation } from 'react-router-dom'

const ProductCard = (props) => {
    const location = useLocation()
    
    return (
        <div className={`${location.pathname == '/' ? 'col' : 'col-md-3'}`}>
            <div className="shop-product-card text-dark w-100 h-100 position-relative d-flex align-items-center justify-content-center">
                <div className="product-view-addtocart">
                    <ProductQuickView />
                    <ProductAddToCart {...props} />
                </div>
                <Link to={`/view-product/${props.slug}`}>
                    <img src={`/images/front/product-thumbnails/${props.image}`} className="d-block mx-auto" />
                    <div className="product-body text-center">
                        <h5 className="position-relative product-title">{props.title}</h5>
                        <span className="price">Ksh. {parseInt(props.price)-0.01}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard