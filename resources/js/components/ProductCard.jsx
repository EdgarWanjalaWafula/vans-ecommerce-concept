import { productThumbnail } from "../images/images"
import ProductAddToCart from "./ProductAddToCart"
import ProductQuickView from "./ProductQuickView"

const ProductCard = () => {
    return (
        <div className="col">
            <div className="shop-product-card w-100 position-relative d-flex align-items-center justify-content-center">
                <div className="product-view-addtocart">
                    <ProductQuickView />
                    <ProductAddToCart />
                </div>
                <div>
                    <img src={productThumbnail} className="d-block mx-auto" />
                    <div className="product-body text-center">
                        <h5 className="position-relative product-title">Mono old skool shoes</h5>
                        <span className="price">Ksh. 120</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard