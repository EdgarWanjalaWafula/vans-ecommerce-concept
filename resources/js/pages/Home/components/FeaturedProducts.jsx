import ProductCard from "../../../components/ProductCard"
import ProductGenderFilter from "../../../components/ProductGenderFilter"

const FeaturedProducts = () => {
    return (
        <section className="shop-home-featured-products theme-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-2 text-center text-uppercase">
                        <div className="shop-section-title">
                            <h1>featured products</h1>
                            <ProductGenderFilter />
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    {
                        Array.from(Array(5), (item, index) => (
                            <ProductCard />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts