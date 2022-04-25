import Banner from "./components/Banner"
import FeaturedProducts from "./components/FeaturedProducts"
import NewArrivals from "./components/NewArrivals"

const Home = () => {
    return (
        <>
            <Banner />
            <FeaturedProducts />
            <section className="position-relative must-haves-new-arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col-md-5">
                            <NewArrivals />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home