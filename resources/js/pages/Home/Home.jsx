import Banner from "./components/Banner"
import FeaturedProducts from "./components/FeaturedProducts"
import NewArrivals from "./components/NewArrivals"
import SeasonMusthaves from "./components/SeasonMusthaves"

const Home = () => {
    return (
        <>
            <Banner />
            <FeaturedProducts />
            <section className="position-relative must-haves-new-arrivals">
                <div className="container">
                    <div className="row align-items-center">
                        <SeasonMusthaves />
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