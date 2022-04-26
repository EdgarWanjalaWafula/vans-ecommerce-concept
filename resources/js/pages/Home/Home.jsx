import BlogItem from "../../components/blog/BlogItem"
import DiscoverMoreBanner from "../../components/DiscoverMoreBanner"
import { newArrivalsBg, uniformSection } from "../../images/images"
import Banner from "./components/Banner"
import BlowRowBanner from "./components/BlowRowBanner"
import FeaturedProducts from "./components/FeaturedProducts"
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
                            <DiscoverMoreBanner image={newArrivalsBg} heading='new arrivals pro skate' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="position-relative theme-blog">
                <div className="container">
                    <div className="row g-0">
                        {
                            Array.from(Array(3), (item, index) => (
                                <BlogItem />
                            ))
                        }
                        <div className="col-md-5">
                            <BlowRowBanner/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home