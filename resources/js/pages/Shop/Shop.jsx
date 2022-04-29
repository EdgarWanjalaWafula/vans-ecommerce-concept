import { useContext } from "react"
import { UseProductContext } from "../../contexts/UseProductContext"
import ProductCard from '../../components/ProductCard'
import { useLocation } from "react-router-dom"

const Shop = () => {
    const products = useContext(UseProductContext)
    const loc = useLocation()
    const { state } = loc
    const filtered = products.filter(product => product.product_category_id == state.id)

    return (
        <section className="shop-all position-relative">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-4">
                        <h1 className="m-0">{state.pagetitle}</h1>
                    </div>
                    <div className="col-md-3">
                        <ul className="d-flex justify-content-between shop-filters">
                            <li><span className="small">{filtered.length} items</span></li>
                            <li className="d-flex align-items-center"><h6 className="m-0">Filter</h6><i class="bi bi-sliders"></i></li>
                            <li className="d-flex align-items-center"><h6 className="m-0">Sort</h6><i class="bi bi-chevron-down"></i></li>
                        </ul>
                    </div>
                </div>
                <div className="row g-0">
                    {
                        filtered.map(({ id, ...rest }, index) => (
                            <ProductCard key={id} {...rest} />
                        ))
                    }
                </div>
                <div className="row">
                    <div className="col-md-6 offset-3 text-center">
                        <button className="btn"><h5 className="m-0">load more</h5></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop