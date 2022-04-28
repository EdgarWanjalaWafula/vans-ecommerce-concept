import { useContext } from "react"
import { UseProductContext } from "../../contexts/UseProductContext"
import ProductCard from '../../components/ProductCard'

const Shop=()=>{
    const products = useContext(UseProductContext)
    return (
        <section className="shop-all position-relative">
            <div className="container">
                <div className="row g-0">
                    {
                        products.map(({id, ...rest}, index) => (
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