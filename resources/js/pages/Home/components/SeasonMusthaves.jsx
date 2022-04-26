import OwlCarousel from 'react-owl-carousel';
import ProductPrice from '../../../components/product/ProductPrice';
import ThemeButton from "../../../components/ThemeButton"
import { productThumbnail } from '../../../images/images';

const SeasonMusthaves = () => {
    return (
        <>
            <div className="col-md-7 theme-season-musthaves">
                <div className="d-flex justify-content-between">
                    <div className="position-relative season-section-title">
                        <div className="position-relative">
                            <span className='section-number'>01</span>
                            <h1 style={{ width: '65%' }} className="position-relative">this season's must-haves</h1>
                            <ThemeButton target='/' label='shop now' />
                        </div>
                    </div>
                    <div className="season-slider">
                        <OwlCarousel className='owl-theme' nav items={1} margin={10}>
                            <div class='item'>
                                <div className="season-slider-card">
                                    <img src={productThumbnail} alt="" />
                                    <div className="season-slider-body text-center">
                                        <h6 className='mx-auto'>vans dipped palm island youth t-shirt</h6>
                                        <ProductPrice />
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="season-slider-card">
                                    <img src={productThumbnail} alt="" />
                                    <div className="season-slider-body text-center">
                                        <h6 className='mx-auto'>vans dipped palm island youth t-shirt</h6>
                                        <ProductPrice />
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="season-slider-card">
                                    <img src={productThumbnail} alt="" />
                                    <div className="season-slider-body text-center">
                                        <h6 className='mx-auto'>vans dipped palm island youth t-shirt</h6>
                                        <ProductPrice />
                                    </div>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="season-slider-card">
                                    <img src={productThumbnail} alt="" />
                                    <div className="season-slider-body text-center">
                                        <h6 className='mx-auto'>vans dipped palm island youth t-shirt</h6>
                                        <ProductPrice />
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeasonMusthaves