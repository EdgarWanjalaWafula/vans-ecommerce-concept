import ThemeButton from "../../../components/ThemeButton"
import { homeBanner } from "../../../images/images"
import { Parallax } from 'react-parallax';

const Banner = () => {
    return (
        <section className="position-relative shop-home-banner">
            <Parallax bgImage={homeBanner} strength={200}>
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-md-8 offset-1 text-white text-uppercase">
                            <h1>Van is oldskool</h1>
                            <p>THE OLD SKOOL™ HAS A RICH HISTORY OF BEING ADOPTED BY PEOPLE WITH A REBELLIOUS SPIRIT, BECOMING A STAPLE AMONG STREET SKATERS IN THE ’90s AND A GO-TO FOR HARDCORE PUNK LEGENDS AS A SYMBOL OF CREATIVE DEFIANCE</p>
                            <ThemeButton target='/page/shop' label='Shop now' />
                        </div>
                    </div>
                </div>
            </Parallax>
        </section>
    )
}

export default Banner