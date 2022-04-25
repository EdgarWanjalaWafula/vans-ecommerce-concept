import ThemeButton from "../../../components/ThemeButton"
import { homeBanner } from "../../../images/images"

const Banner=()=>{
    return(
        <section className="position-relative shop-home-banner d-flex align-items-center">
            <img src={homeBanner} className="position-absolute h-100" />
            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-8 offset-1 text-white text-uppercase">
                        <h1>Van is oldskool</h1>
                        <p>THE OLD SKOOL™ HAS A RICH HISTORY OF BEING ADOPTED BY PEOPLE WITH A REBELLIOUS SPIRIT, BECOMING A STAPLE AMONG STREET SKATERS IN THE ’90s AND A GO-TO FOR HARDCORE PUNK LEGENDS AS A SYMBOL OF CREATIVE DEFIANCE</p>
                        <ThemeButton target='/page/shop' label='Shop now' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner